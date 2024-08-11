const express = require('express');
const { sendNotification } = require('../controllers/notification.controller.js');

const router = express.Router();

const createNotificationRoutes = (io) => {
    router.post('/send-notification', (req, res) => sendNotification(req, res, io));
    return router;
};

module.exports = createNotificationRoutes;
