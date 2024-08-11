import React, { useState } from 'react';
import { signUp, verifyOTP } from '../../services/auth/auth.service';
import { Link, useNavigate } from "react-router-dom"
import  smitlogo from '../../assets/smit-logo.png';

const SignUp = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignUp = async () => {

        try {
            await signUp(form);
            setIsOtpSent(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleVerifyOtp = async () => {
        try {
            await verifyOTP({ email: form.email, otp });
            // Redirect to login or dashboard
            navigate("/login")

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-4">
            {!isOtpSent ? (
                <div className="card p-4">
                    <img src={smitlogo} alt="SMIT Logo" />
                    <h3 className="mb-4">SMIT Student Admission Sign Up</h3>
                    <form>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                        <p>already have an accout <Link to={"/login"}>sign in</Link>  </p>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            ) : (
                <div className="card p-4">
                    <h3 className="mb-4">Verify OTP</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="otp" className="form-label">OTP</label>
                            <input
                                type="text"
                                id="otp"
                                className="form-control"
                                placeholder="Enter OTP"
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleVerifyOtp}
                        >
                            Verify OTP
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default SignUp;
