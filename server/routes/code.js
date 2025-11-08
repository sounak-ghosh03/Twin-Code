const express = require('express');
const router = express.Router();
const { analyze, getSubmissions } = require('../controllers/codeController');
const auth = require('../middleware/auth');

// Input validation middleware
const validateCode = (req, res, next) => {
  const { code, language } = req.body;
  if (!code || typeof code !== 'string' || code.trim().length === 0) {
    return res.status(400).json({ message: 'Valid code is required' });
  }
  if (!language || typeof language !== 'string') {
    return res.status(400).json({ message: 'Valid language is required' });
  }
  const allowedLanguages = ['javascript', 'python', 'java', 'csharp', 'go'];
  if (!allowedLanguages.includes(language)) {
    return res.status(400).json({ message: 'Unsupported language' });
  }
  next();
};

router.post('/analyze', auth, validateCode, analyze);
router.get('/submissions', auth, getSubmissions);

module.exports = router;