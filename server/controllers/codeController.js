const { analyzeCode } = require('../services/geminiService');
const Submission = require('../models/Submission');

const analyze = async (req, res) => {
  const { code, language } = req.body;
  const userId = req.user?.userId || 'anonymous';

  try {
    const analysis = await analyzeCode(code, language);
    const submission = new Submission({ 
      code: code.substring(0, 10000), // Limit code length
      language, 
      analysis, 
      userId 
    });
    await submission.save();
    res.json({ analysis: submission.analysis });
  } catch (error) {
    console.error('Code analysis error:', error);
    res.status(500).json({ message: 'Failed to analyze code' });
  }
};

const getSubmissions = async (req, res) => {
  try {
    const userId = req.user?.userId || 'anonymous';
    const submissions = await Submission.find({ userId }).sort({ timestamp: -1 }).limit(50);
    res.json(submissions);
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({ message: 'Failed to fetch submissions' });
  }
};

module.exports = { analyze, getSubmissions };