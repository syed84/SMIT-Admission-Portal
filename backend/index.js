const express = require('express');
const http = require('http');

const socketIo = require('socket.io');
const cors = require('cors');

const connectDB = require('./src/configs/db.config.js');
const userRoutes = require('./src/routes/user.route.js');
const adminRoutes = require('./src/routes/admin.route.js');
const pdfRouter = require('./src/routes/id.card.route.js');
const quizRouter = require('./src/routes/quiz.route.js');
const sendEmail = require("./src/configs/mailer.config.js")
const User = require('./src/models/user.model.js');
const { isAdmin } = require('./src/middlewares/verify.token.middleware.js');

require('dotenv').config();
require('events').EventEmitter.defaultMaxListeners = 20;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


connectDB();

app.use(
    cors({
        origin: ["http://localhost:5173", "http://localhost:5174"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/pdf', pdfRouter);
app.use('/api', quizRouter);
app.get("/", (req, res) => {
    res.send("Hello from the Server");
})
// app.get('/users', async (req, res) => {
//     try {
//         // const users = await User.find();
//         const users = await User.find().select('name');;
//         res.json(users);
//     } catch (err) {
//         res.status(500).send('Server error');
//     }
// });

app.post('/api/send-notification', async (req, res) => {
    const { message, status } = req.body;

    try {
        let users;
        if (status === 'all') {
            users = await User.find().select('_id email');
        } else {
            users = await User.find({ status }).select('_id email');
        }

        const recipientEmails = users.map(user => user.email);

        // Send email to all users with the specified status
        if (recipientEmails.length > 0) {
            sendEmail(recipientEmails.join(','), 'New Notification', message);
        }

        // Emit notification to all users with the specified status
        users.forEach(user => {
            io.emit(`notification-${user._id}`, message);
        });

        res.json({ status: 'success', message: 'Notification sent successfully' });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});


io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});


const PORT = process.env.PORT || 6540;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
