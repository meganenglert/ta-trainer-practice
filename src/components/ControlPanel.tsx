import { Button , Col} from 'react-bootstrap';
import { Question, roundType } from '../interfaces/question';
import QUESTIONS from '../assets/1000questions.json';
import { Task as User } from 'editable-dnd-list';
import { useState } from 'react';
import { UserList } from './UserList';

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

export const INITIAL_USERS: User[] = [
    {id: '1', text: "Megan"},
    {id: '2', text: "suki"},
    {id: '3', text: 'sebastian'}
];

export function getLocalStorageUsers(): User[] {
    let rawUsers: string|null = localStorage.getItem(LOCAL_STORAGE_USERS);
    if (rawUsers === null) {
        return [...INITIAL_USERS];
    }
    else {
        return JSON.parse(rawUsers);
    }
}

export function ControlPanel({setQuestion, reveal, answerRevealed}: 
    {setQuestion: (q: Question)=>void, reveal: (r: boolean)=>void, answerRevealed: boolean}): JSX.Element {

       
        const [users, setUsers] = useState<User[]>(getLocalStorageUsers());
        const [deck, setDeck] = useState<Question[]>(QUESTIONS as Question[]);
        
    function setRandomQuestion() {
        reveal(false);
        setQuestion(getRandomElement(deck as Question[]))
    }

    function save() {
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(users));
    }
    
    function shuffleUsers() {
        setUsers([...shuffle(users)]);
    }
    
    function addNewQuestion() {
        const newQuestion: Question = {
            ID: Math.random(),
            episode: -1,
            airdate: "custom",
            round: roundType.round1,
            category: window.prompt("Question category: ") || "NO CATEGORY",
            value: 500,
            prompt: window.prompt("Question: ") || "NO QUESTION",
            answer: window.prompt("Answer: ") || "NO ANSWER"
        }
        setDeck([...deck, newQuestion])
    }

    return <Col>
        <h1>Control Panel</h1>
        <UserList users={users} setUsers={setUsers}></UserList>
        <Button onClick={() => reveal(!answerRevealed)}>Reveal Answer</Button>
        <Button onClick={setRandomQuestion}>New Question</Button>
        <Button onClick={shuffleUsers}>Shuffle Users</Button>
        <Button onClick={save} className="m-4" variant="success">Save</Button>
        <Button onClick={addNewQuestion} className="m-4">Add new question</Button>
    </Col>
}