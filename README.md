# AI Code Companion

An interactive code learning companion that provides AI-powered code analysis and chat-based tutoring. This application allows users to write code, get instant feedback, and ask questions to an AI tutor.

## Features

- **Code Editor**: A feature-rich code editor with syntax highlighting for multiple languages.
- **AI Code Analysis**: Get instant code analysis and feedback from the Google Gemini API.
- **AI Chat Tutor**: Chat with an AI tutor to ask questions and get explanations about your code.
- **Submission History**: View a history of your code submissions and their corresponding analysis.
- **Modern UI**: A clean and modern user interface built with React and Tailwind CSS.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router, Axios, Prism.js
- **Backend**: Node.js, Express, Mongoose, Google Gemini API
- **Database**: MongoDB

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/code-learning-companion.git
   cd code-learning-companion
   ```

2. **Set up the backend:**

   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file by copying the `.env.example` file:
     ```bash
     cp .env.example .env
     ```
   - Open the `.env` file and add your MongoDB connection string and Google Gemini API key.

3. **Set up the frontend:**

   - Navigate to the `client` directory:
     ```bash
     cd ../client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

### Running the Application

1. **Start the backend server:**

   - In the `server` directory, run:
     ```bash
     npm run dev
     ```
   - The server will start on `http://localhost:5000`.

2. **Start the frontend development server:**

   - In the `client` directory, run:
     ```bash
     npm run dev
     ```
   - The application will be available at `http://localhost:5173`.

## Project Structure

```
code-learning-companion/
├── client/         # React frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # React pages
│   │   ├── services/   # API services
│   │   └── ...
│   └── ...
└── server/         # Node.js backend
    ├── config/       # Database configuration
    ├── controllers/  # Route controllers
    ├── models/       # Mongoose models
    ├── routes/       # API routes
    ├── services/     # Gemini API service
    └── ...
```