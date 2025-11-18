import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
  <Router>
    {/* NAVBAR */}
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md border-b border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 hover:text-indigo-400 transition-colors"
        >
          <span className="inline-block w-2 h-6 bg-indigo-500 rounded-full"></span>
          AI Code Companion
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {localStorage.getItem('token') ? (
            <>
              <Link
                to="/home"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.href = '/';
                }}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>

    {/* ROUTES */}
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </main>
  </Router>
);

}

export default App;
