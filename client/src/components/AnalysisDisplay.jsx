import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const AnalysisDisplay = ({ analysis }) => {
  if (!analysis) {
    return null;
  }

  return (
  <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
    <div className="flex items-center gap-2 mb-4">
      <div className="h-6 w-1.5 bg-green-500 rounded-full"></div>
      <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">AI Analysis</h3>
    </div>
    <div className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100 font-sans text-[15px] max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      <MarkdownRenderer content={analysis} />
    </div>
  </div>
);

};

export default AnalysisDisplay;