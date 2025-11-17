import React, { useState, useEffect } from 'react';
import SubmissionHistory from '../components/SubmissionHistory';
import AnalysisDisplay from '../components/AnalysisDisplay';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { getSubmissions } from '../services/api';

const Dashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await getSubmissions();
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
  }, []);

  const handleSelectSubmission = (submission) => {
    setSelectedSubmission(submission);
  };

 return (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    {/* Left Sidebar: Submission History */}
    <div className="lg:col-span-1">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span className="inline-block w-2 h-8 bg-indigo-500 rounded-full"></span>
        Submission History
      </h1>
      <SubmissionHistory
        submissions={submissions}
        onSelectSubmission={handleSelectSubmission}
      />
    </div>

    {/* Right Panel: Submission Details + AI Analysis */}
    <div className="lg:col-span-2">
      {selectedSubmission ? (
        <div className="animate-fadeIn">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="inline-block w-1.5 h-6 bg-indigo-500 rounded-full"></span>
            Submission Details
          </h2>

          {/* Code Display */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 mb-6 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              <span>Code ({selectedSubmission.language})</span>
              <span className="text-sm text-gray-500">
                {new Date(selectedSubmission.timestamp).toLocaleString()}
              </span>
            </h3>

            <pre className="bg-gray-50 border border-gray-100 rounded-xl p-4 mt-3 overflow-x-auto text-sm font-mono text-gray-800 leading-relaxed scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <code>{selectedSubmission.code}</code>
            </pre>
          </div>

          {/* AI Analysis */}
          <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-1.5 bg-green-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">AI Analysis</h3>
            </div>
            <div className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100 font-sans text-[15px] max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <MarkdownRenderer content={selectedSubmission.analysis} />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center text-gray-500">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 text-center">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              No Submission Selected
            </h2>
            <p className="text-sm text-gray-500">
              Select a submission from the left to view details and AI analysis.
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
);

};

export default Dashboard;