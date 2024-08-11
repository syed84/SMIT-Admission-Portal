import React from 'react';
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/");
    }

    return (
        <div>
            <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
        </div>
    );
}

export default Logout;
