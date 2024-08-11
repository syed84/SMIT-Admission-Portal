import React, { useEffect, useState } from 'react';
import { subscribeToNotifications, disconnect } from '../../services/web_socket/socket.service';

const Notifications = ({ userId }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const handleNotification = (message) => {
            setNotifications((prevNotifications) => [...prevNotifications, message]);
        };

        subscribeToNotifications(userId, handleNotification);

        return () => {
            disconnect();
        };
    }, [userId]);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
