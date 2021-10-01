import React, { useState } from 'react';
import './App.css';
import QUESTIONS from './assets/1000questions.json';
import { ControlPanel } from './components/ControlPanel';
import { QuestionViewer } from './components/QuestionViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row} from 'react-bootstrap';
import { Question } from './interfaces/question';
import { AddCardModal } from './components/AddCardModal';
import { Team } from './interfaces/team';


function App(): JSX.Element {


  const [activeQuestion, setActiveQuestion] = useState<Question>(QUESTIONS[0] as Question);
  const [answerRevealed, reveal] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [deck, setDeck] = useState<Question[]>(QUESTIONS as Question[]);
  function addCard(newCard: Question) {
    setDeck([...deck, newCard]);
  }
  return (
    <Container className="App">
      <h1>JEOPARDY!</h1>
      <Row>
        
        <ControlPanel showAddCardModal={setVisible} setQuestion={setActiveQuestion} reveal={reveal} answerRevealed={answerRevealed} deck={deck} question={activeQuestion}></ControlPanel>
        <QuestionViewer question={activeQuestion} answerRevealed={answerRevealed}></QuestionViewer>
        <AddCardModal visible={visible} setVisible={setVisible} addCard={addCard}></AddCardModal>
      </Row>
      <div><a className="link" href="https://www.reddit.com/r/datasets/comments/1uyd0t/200000_jeopardy_questions_in_a_json_file/">View question source here!</a></div>
    </Container>
  );
}

export default App;
