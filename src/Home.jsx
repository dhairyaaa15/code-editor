import React from 'react';
import TextEditor from'./component/TextEditor';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Simple Code Editor</h1>
      <TextEditor />
    </div>
  );
};

export default Home;