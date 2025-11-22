import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-go';
import 'prismjs/themes/prism-tomorrow.css';

const CodeEditor = ({ code, setCode, language }) => {
  const highlightWithLanguage = (code) => {
    try {
      const lang = languages[language] || languages.js;
      return highlight(code, lang, language);
    } catch (error) {
      console.error('Syntax highlighting error:', error);
      return code;
    }
  };

  return (
  <Editor
    value={code}
    onValueChange={(code) => setCode(code)}
    highlight={highlightWithLanguage}
    padding={16}
    style={{
      fontFamily: '"Fira Code", "JetBrains Mono", monospace',
      fontSize: 14,
      background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
      color: '#f8f8f2',
      borderRadius: '12px',
      border: '1px solid #3b3b3b',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3), inset 0 0 10px rgba(255,255,255,0.03)',
      outline: 'none',
      minHeight: '200px',
      transition: 'box-shadow 0.3s ease, border 0.3s ease',
    }}
    className="focus-within:ring-2 focus-within:ring-indigo-500"
  />
);

};

export default CodeEditor;