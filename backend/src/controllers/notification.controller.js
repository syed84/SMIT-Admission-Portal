const User = require('../models/user.model.js');
const sendEmail = require('../configs/mailer.config.js');

const sendNotification = async (req, res, io) => {
    const { message } = req.body;

    try {
        const users = await User.find();
        const recipientEmails = users.map(user => user.email);

        // Send email to all users
        sendEmail(recipientEmails.join(','), 'New Notification', message);

        // Emit notification to all users
        users.forEach(user => {
            io.emit(`notification-${user._id}`, message);
        });

        res.json({ status: 'success', message: 'Notification sent successfully' });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
};

module.exports = {
    sendNotification,
};