const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  code: { type: String, required: true },
  language: { type: String, required: true },
  analysis: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  userId: { type: String, required: true },
});

module.exports = mongoose.model('Submission', submissionSchema);