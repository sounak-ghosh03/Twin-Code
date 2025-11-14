import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import ChatInterface from '../components/ChatInterface';
import AnalysisDisplay from '../components/AnalysisDisplay';
import { analyzeCode, sendMessage } from '../services/api';

const Home = () => {
  const [code, setCode] = useState('// Write your code here');
  const [language, setLanguage] = useState('javascript');
  const [messages, setMessages] = useState([]);
  const [analysis, setAnalysis] = useState('');

  const handleSendMessage = async (message) => {
    const userMessage = { text: message, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await sendMessage(message, code);
      const aiMessage = { text: response.data.response, isUser: false };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { text: 'Error: Could not get a response from the AI.', isUser: false };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const handleAnalyze = async () => {
    try {
      const response = await analyzeCode(code, language);
      setAnalysis(response.data.analysis);
    } catch (error) {
      console.error('Error analyzing code:', error);
      setAnalysis('Error: Could not analyze the code.');
    }
  };

  return (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    {/* LEFT SIDE: Editor + Analysis */}
    <div className="lg:col-span-2 flex flex-col gap-6">
      {/* Header Row */}
      <div className="flex justify-between items-center bg-white px-5 py-4 rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span className="inline-block w-1.5 h-6 bg-indigo-500 rounded-full"></span>
          Code Editor
        </h2>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-4 py-2.5 border border-gray-300 rounded-xl text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition-all"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="go">Go</option>
        </select>
      </div>

      {/* Code Editor */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 transition-all hover:shadow-lg">
        <CodeEditor code={code} setCode={setCode} language={language} />
      </div>

      {/* Analyze Button */}
      <div className="flex justify-end">
        <button
          onClick={handleAnalyze}
          className="px-6 py-2.5 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all shadow-sm"
        >
          Analyze Code
        </button>
      </div>

      {/* AI Analysis */}
      <AnalysisDisplay analysis={analysis} />
    </div>

    {/* RIGHT SIDE: Chat */}
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 h-full overflow-hidden transition-all hover:shadow-lg">
        <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
      </div>
    </div>
  </div>
);

};

export default Home;