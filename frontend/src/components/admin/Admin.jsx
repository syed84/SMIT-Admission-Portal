
import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [message, setMessage] = useState('');

    const handleSendNotification = async () => {
        try {
            await axios.post('http://localhost:6540/api/send-notification', { message });
            alert('Notification sent successfully');
        } catch (error) {
            console.error('Error sending notification:', error);
            alert('Error sending notification');
        }
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <textarea
                placeholder="Enter your notification message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={handleSendNotification}>Send Notification</button>
        </div>
    );
};

export default Admin;
