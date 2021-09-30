import { Button , Col} from 'react-bootstrap';
import { Question, roundType } from '../interfaces/question';
import QUESTIONS from '../assets/1000questions.json';
import { useState } from 'react';

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



export function ControlPanel({showAddCardModal, setQuestion, reveal, answerRevealed, deck}: 
    {showAddCardModal: (b: boolean)=>void,setQuestion: (q: Question)=>void, reveal: (r: boolean)=>void, answerRevealed: boolean, deck: Question[]}): JSX.Element {

        
    function setRandomQuestion() {
        reveal(false);
        setQuestion(getRandomElement(deck as Question[]))
    }
    
    function addNewCard() {
        showAddCardModal(true);
    }
    return <Col>
        <h1>Control Panel</h1>
        <Button onClick={() => reveal(!answerRevealed)} className="m-4">Reveal Answer</Button>
        <Button onClick={setRandomQuestion} className="m-4">Next Question</Button>
        <Button onClick={addNewCard} className="m-4">Add New Question</Button>
    </Col>
}