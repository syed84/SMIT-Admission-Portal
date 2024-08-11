const express = require('express');
const { getIdCard } = require('../controllers/id.card.controller');
const router = express.Router();
router.post('/generate-id', getIdCard);
// router.post('/generate-id', gererateIdCard);
module.exports = router;
