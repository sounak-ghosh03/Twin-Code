import React from 'react';

const SubmissionHistory = ({ submissions, onSelectSubmission }) => {
  return (
  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300">
    {/* Header */}
    <h3 className="text-xl font-semibold text-gray-800 px-5 py-4 border-b border-gray-200 bg-white flex items-center gap-2">
      <span className="inline-block w-1.5 h-6 bg-indigo-500 rounded-full"></span>
      Submission History
    </h3>

    {/* Submissions List */}
    <ul className="divide-y divide-gray-200">
      {submissions.map((submission) => (
        <li
          key={submission._id}
          onClick={() => onSelectSubmission(submission)}
          className="p-5 cursor-pointer hover:bg-indigo-50/60 transition-all duration-200 group"
        >
          <div className="flex justify-between items-center">
            <span className="font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200">
              {submission.language}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              {new Date(submission.timestamp).toLocaleString()}
            </span>
          </div>

          <p className="text-sm text-gray-700 mt-3 bg-gray-100 group-hover:bg-gray-200 transition-colors duration-200 px-3 py-2 rounded-xl font-mono leading-snug truncate border border-gray-100 shadow-sm">
            {submission.code}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

};

export default SubmissionHistory;