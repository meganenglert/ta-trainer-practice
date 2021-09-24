import React from 'react';
import './App.css';
import QUESTIONS from './assets/1000questions.json';
import { ControlPanel } from './components/ControlPanel';
import { QuestionViewer } from './components/QuestionViewer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(): JSX.Element {
  return (
    <div className="App">
      <ControlPanel></ControlPanel>
      <QuestionViewer></QuestionViewer>

    </div>
  );
}

export default App;
