import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';

const TextEditor = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState(python);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    if (lang === 'python') setLanguage(python);
    else if (lang === 'java') setLanguage(java);
    else if (lang === 'cpp') setLanguage(cpp);
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
          extensions={[language]}
          onChange={(value) => setCode(value)}
          options={{
            lineNumbers: true,
            highlightActiveLine: true
          }}
          style={{ height: '100%' }}
        />
      </div>
    </div>
  );
};

export default TextEditor;