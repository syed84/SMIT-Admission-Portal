const express = require('express');
const { signUp, verifyOTP, login, logout } = require('../controllers/user.controller.js');

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.post('/verify-otp', verifyOTP);
router.post('/logout', logout);

module.exports = router;
