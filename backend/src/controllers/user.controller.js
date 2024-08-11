const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');
const sendEmail = require('../configs/mailer.config.js');
const generateOTP = require('../utils/otp.gererate.util.js');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });
};


let otps = {};

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const otp = generateOTP();

    const otpExpiry = new Date(Date.now() + 10 * 60000); // OTP valid for 10 minutes



    try {

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({ name, email, password, otp, otpExpiry });
        await user.save();

        // Send OTP email

        otps[email] = otp;
        // console.log(`Sending OTP to ${email}: ${otp}`);
        sendEmail(email, 'Verify your OTP', `Your OTP is ${otp}`);

        res.json({ status: 'success', message: 'User registered. Please verify your OTP.' });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
};

const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) {
        return res.status(400).json({ message: 'Email and OTP are required' });
    }
    try {
        const user = await User.findOne({ email });

        // if (!user) {
        //     return res.status(400).json({ status: 'error', message: 'User not found' });
        // }

        // if (user.otp !== otp) {
        //     return res.status(400).json({ status: 'error', message: 'Invalid OTP' });
        // }

        // if (user.otpExpiry < new Date()) {
        //     return res.status(400).json({ status: 'error', message: 'OTP expired' });
        // }


        if (otps[email] === otp) {
            delete otps[email];
            const user = await User.findOne({ email });
            if (user) {
                user.isVerified = true;
                user.otp = null;
                user.otpExpiry = null;
                await user.save();
                const token = generateToken(user._id);
                return res.json({ status: 'success', message: 'OTP verified successfully', token });

            } else {
                return res.status(400).json({ message: 'User not found' });
            }
        } else {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
};
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });



        if (user && (await user.matchPassword(password))) {
            if (!user.isVerified) {
                return res.status(400).json({ message: 'Please verify your email' });
            }
            const token = generateToken(user._id);


            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                maxAge: 3600000,

            })
            res.json({
                _id: user._id,
                email: user.email,
                token,



            });







        } else {
            return res.status(401).json({ message: 'Invalid email or password' });
        }



    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
        console.log(error);
    }
}


module.exports = {
    signUp,
    verifyOTP,
    login,
    logout,
};
