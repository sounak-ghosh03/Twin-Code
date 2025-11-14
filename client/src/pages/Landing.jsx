import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            AI Code Companion
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Learn to code with AI-powered analysis and personalized tutoring. 
            Get instant feedback and improve your programming skills.
          </p>
          
          <div className="flex gap-6 justify-center">
            <Link
              to="/login"
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/register"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-900 transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Code Analysis</h3>
            <p className="text-gray-300">Get instant AI-powered feedback on your code</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">AI Tutor</h3>
            <p className="text-gray-300">Chat with AI to learn programming concepts</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Track Progress</h3>
            <p className="text-gray-300">Monitor your learning journey and improvements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;