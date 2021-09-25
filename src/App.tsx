import React, { useState } from 'react';
import './App.css';
import QUESTIONS from './assets/1000questions.json';
import { ControlPanel } from './components/ControlPanel';
import { QuestionViewer } from './components/QuestionViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row} from 'react-bootstrap';
import { Question } from './interfaces/question';


function App(): JSX.Element {

  const [activeQuestion, setActiveQuestion] = useState<Question>(QUESTIONS[0] as Question);
  const [answerRevealed, reveal] = useState<boolean>(false);
  console.log(`app ${answerRevealed}`);
  
  return (
    <Container className="App">
      <Row>
        
        <ControlPanel setQuestion={setActiveQuestion} reveal={reveal} answerRevealed={answerRevealed}></ControlPanel>
        <QuestionViewer question={activeQuestion} answerRevealed={answerRevealed}></QuestionViewer>
      </Row>
    </Container>
  );
}

export default App;
