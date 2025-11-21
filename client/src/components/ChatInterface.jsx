import React, { useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const ChatInterface = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
  <div className="flex flex-col h-full bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200">
    {/* Header */}
    <div className="p-4 border-b border-gray-200 bg-white rounded-t-2xl flex items-center justify-between">
      <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Chat with AI Tutor
      </h3>
      <span className="text-xs text-gray-500 font-medium">AI is active</span>
    </div>

    {/* Chat messages */}
    <div className="flex-1 p-5 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} group`}
        >
          <div
            className={`p-3 rounded-2xl max-w-[80%] shadow-sm transition-all duration-300 ${
              message.isUser
                ? 'bg-indigo-600 text-white rounded-br-none'
                : 'bg-gray-100 text-gray-800 rounded-bl-none'
            }`}
          >
            {message.isUser ? (
              message.text
            ) : (
              <MarkdownRenderer content={message.text} />
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Input form */}
    <form
      onSubmit={handleSubmit}
      className="p-4 border-t border-gray-200 bg-white rounded-b-2xl"
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition-all"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium shadow-sm"
        >
          Send
        </button>
      </div>
    </form>
  </div>
);

};

export default ChatInterface;