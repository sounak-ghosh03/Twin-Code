const express = require('express');
const router = express.Router();
const { message } = require('../controllers/chatController');
const auth = require('../middleware/auth');

// Input validation middleware
const validateMessage = (req, res, next) => {
  const { message, context } = req.body;
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ message: 'Valid message is required' });
  }
  if (message.length > 1000) {
    return res.status(400).json({ message: 'Message too long' });
  }
  next();
};

router.post('/message', auth, validateMessage, message);

module.exports = router;