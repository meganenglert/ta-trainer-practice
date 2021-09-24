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

  return (
    <Container className="App">
      <Row>
        <ControlPanel setQuestion={setActiveQuestion}> </ControlPanel>
        <QuestionViewer question={activeQuestion}></QuestionViewer>
      </Row>
    </Container>
  );
}

export default App;
