// src/App.tsx
import React from 'react';
import ChatInterface from './components/ChatInterface';
import CodeUpload from './components/CodeUpload';

const App: React.FC = () => {
  return (
    <div className="App">
      <ChatInterface />
      <CodeUpload />
    </div>
  );
}

export default App;