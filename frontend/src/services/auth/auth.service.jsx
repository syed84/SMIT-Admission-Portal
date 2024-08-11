import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signUp = async (userData) => {
    return await axios.post(`${API_URL}/users/signup`, userData);
};

export const verifyOTP = async (otpData) => {
    return await axios.post(`${API_URL}/users/verify-otp`, otpData);
};

export const login = async (userData) => {
    return await axios.post(`${API_URL}/users/login`, userData);
};
