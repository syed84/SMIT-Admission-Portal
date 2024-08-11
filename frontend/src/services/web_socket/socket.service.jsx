import { io } from 'socket.io-client';

const socket = io('http://localhost:6540'); // Replace with your server URL

export const subscribeToNotifications = (userId, callback) => {
    socket.on(`notification-${userId}`, callback);
};

export const disconnect = () => {
    socket.disconnect();
};
