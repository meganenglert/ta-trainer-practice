import { Button , Col} from 'react-bootstrap';
import { Question, roundType } from '../interfaces/question';
import { useState } from 'react';
import { Team } from '../interfaces/team';
import TEAMS from '../assets/teams.json';
import { TeamPointCounter } from './TeamPointCounter';

// Same source as Dr. Bart used (I am lazy)
function getRandomElement<T>(items: T[]): T  {
    return items[Math.floor(Math.random()*items.length)];
}

export const LOCAL_STORAGE_USERS = 'ta-trainer-users';



// from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



export function ControlPanel({showAddCardModal, setQuestion, reveal, answerRevealed, deck, question}: 
    {showAddCardModal: (b: boolean)=>void,setQuestion: (q: Question)=>void, reveal: (r: boolean)=>void, answerRevealed: boolean, deck: Question[], question: Question}): JSX.Element {

    
    const [teamList, setTeamList] = useState<Team[]>(TEAMS as Team[]);
    
    const [addTeamRevealed, revealAddTeam] = useState<boolean>(false);

    function switchAddTeam() {
        revealAddTeam(!addTeamRevealed);
    }


    function addTeam(newTeam: Team) {
        setTeamList([...teamList, newTeam]);
      }
      function addPoints(team: Team, points: number) {
        team.score += points;
        setTeamList([...teamList]);
      }

    function setRandomQuestion() {
        reveal(false);
        setQuestion(getRandomElement(deck as Question[]))
    }
    
    function addNewCard() {
        showAddCardModal(true);
    }
    return <Col>
        <TeamPointCounter teamList={teamList} points={question.value} addPoints={addPoints} addTeamRevealed={addTeamRevealed} switchAddTeam={switchAddTeam} addTeam={addTeam}></TeamPointCounter>

        <h1>Control Panel</h1>
        <div> 
        <Button variant="light" onClick={() => reveal(!answerRevealed)} className="m-4">Reveal Answer</Button>
        </div>
        <Button variant="light" onClick={setRandomQuestion} className="m-4">Next Question</Button>
        <div>
        <Button variant="light" onClick={addNewCard} className="m-4">Add New Question</Button>
        </div>
    </Col>
}