import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { EditorView } from '@codemirror/view';

const TextEditor = () => {
  const [code, setCode] = useState('\n'.repeat(15));

  const [language, setLanguage] = useState(python);
  const [theme, setTheme] = useState('dark');

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    if (lang === 'python') setLanguage(python);
    else if (lang === 'java') setLanguage(java);
    else if (lang === 'cpp') setLanguage(cpp);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleCodeChange = (newCode) => {
    const lines = newCode.split('\n');
    if (lines.length >= 16) {
      setCode(newCode);
    } else {
      setCode('\n'.repeat(16 - lines.length) + newCode);
    }
  };

  const lineHeight = 1.2;
  const numberOfLines = 16;
  const editorHeight = `${lineHeight * numberOfLines}em`;

  return (
    <div className="p-4">
      <select onChange={handleLanguageChange} className="mb-2">
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
      </select>
      <button onClick={toggleTheme} className="mb-2 p-1 border rounded">
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
      </button>
      <div
        style={{
          height: editorHeight,
          overflow: 'auto',
          border: '2px solid #ccc',
          borderRadius: '4px',
        }}
      >
        <CodeMirror
          value={code}
          extensions={[language, EditorView.lineWrapping]}
          onChange={handleCodeChange}
          theme={theme}
          options={{
            lineNumbers: true,
          }}
          style={{ height: '100%' }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
