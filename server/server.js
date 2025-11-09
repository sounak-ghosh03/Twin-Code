const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Secure CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));

// Initialize database connection
connectDB().catch(err => {
  console.error('Failed to connect to database:', err);
  process.exit(1);
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/code', require('./routes/code'));
app.use('/api/chat', require('./routes/chat'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));