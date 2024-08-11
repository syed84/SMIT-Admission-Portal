const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    otp: String,
    otpExpiry: Date,
    // isEmailConfirmed: { type: Boolean, default: false },
    // isPhoneConfirmed: { type: Boolean, default: false },
    // phone: String,
    // add more fields here for user profile and more...


    isVerified: { type: Boolean, default: false }, // update for otp
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    status: {
        type: String,
        enum: ['pass', 'fail', 'enroll'],
        default: 'enroll',
    },
}, { timestamps: true });



userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
module.exports = mongoose.model('User', userSchema);

