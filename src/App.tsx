import React from 'react';
import './App.css';
import QUESTIONS from './assets/1000questions.json';

function App(): JSX.Element {
  return (
    <div className="App">
      {JSON.stringify(QUESTIONS)};

    </div>
  );
}

export default App;
