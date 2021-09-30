import React, { useState } from 'react';
import './App.css';
import QUESTIONS from './assets/1000questions.json';
import { ControlPanel } from './components/ControlPanel';
import { QuestionViewer } from './components/QuestionViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row} from 'react-bootstrap';
import { Question } from './interfaces/question';
import TEAMS from './assets/teams.json';
import { AddCardModal } from './components/AddCardModal';
import { Team } from './interfaces/team';


function App(): JSX.Element {


  const [activeQuestion, setActiveQuestion] = useState<Question>(QUESTIONS[0] as Question);
  const [answerRevealed, reveal] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [addTeamRevealed, revealAddTeam] = useState<boolean>(false);
  const [deck, setDeck] = useState<Question[]>(QUESTIONS as Question[]);
  const [teamList, setTeamList] = useState<Team[]>(TEAMS as Team[]);
  function addCard(newCard: Question) {
    setDeck([...deck, newCard]);
  }
  function addTeam(newTeam: Team) {
    setTeamList([...teamList, newTeam]);
  }
  function addPoints(team: Team, points: number) {
    team.score += points;
    setTeamList([...teamList]);
  }


  return (
    <Container className="App">
      <Row>
        
        <ControlPanel showAddCardModal={setVisible} setQuestion={setActiveQuestion} reveal={reveal} answerRevealed={answerRevealed} deck={deck}></ControlPanel>
        <QuestionViewer question={activeQuestion} answerRevealed={answerRevealed} teams={teamList} addPoints={addPoints} addTeamRevealed={addTeamRevealed} revealAddTeam={revealAddTeam} addTeam={addTeam}></QuestionViewer>
        <AddCardModal visible={visible} setVisible={setVisible} addCard={addCard}></AddCardModal>
      </Row>
    </Container>
  );
}

export default App;
