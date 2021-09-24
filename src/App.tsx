import React from 'react';
import './App.css';
import QUESTIONS from './assets/1000questions.json';
import { ControlPanel } from './components/ControlPanel';
import { QuestionViewer } from './components/QuestionViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row} from 'react-bootstrap';


function App(): JSX.Element {
  return (
    <Container className="App">
      <Row>
        <ControlPanel></ControlPanel>
        <QuestionViewer></QuestionViewer>
      </Row>
    </Container>
  );
}

export default App;
