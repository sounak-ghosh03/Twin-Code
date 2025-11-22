import React from 'react';

const MarkdownRenderer = ({ content }) => {
  const renderMarkdown = (text) => {
    // Convert markdown to HTML-like structure
    let html = text
      // Headers
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Code blocks
      .replace(/```[\s\S]*?```/g, (match) => {
        const code = match.replace(/```\w*\n?/g, '').replace(/```$/g, '');
        return `<pre><code>${code}</code></pre>`;
      })
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Line breaks
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');

    return html;
  };

  const createMarkup = () => {
    return { __html: renderMarkdown(content) };
  };

  return (
    <div 
      className="markdown-content prose prose-sm max-w-none"
      dangerouslySetInnerHTML={createMarkup()}
      style={{
        lineHeight: '1.6',
      }}
    />
  );
};

export default MarkdownRenderer;