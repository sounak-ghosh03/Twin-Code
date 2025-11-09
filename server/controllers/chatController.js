const { chatAboutCode } = require('../services/geminiService');

const message = async (req, res) => {
  const { message, context = '' } = req.body;

  try {
    const response = await chatAboutCode(message, context.substring(0, 5000));
    res.json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ message: 'Failed to process chat message' });
  }
};

module.exports = { message };