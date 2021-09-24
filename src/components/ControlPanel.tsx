import { Button , Col} from 'react-bootstrap';
import { Question } from '../interfaces/question';
import QUESTIONS from '../assets/1000questions.json';

// Same source as Dr. Bart used (I am lazy)
function getRandomElement<T>(items: T[]): T  {
    return items[Math.floor(Math.random()*items.length)];
}

export function ControlPanel({setQuestion, reveal, answerRevealed}: 
    {setQuestion: (q: Question)=>void, reveal: (r: boolean)=>void, answerRevealed: boolean}): JSX.Element {
    
    function setRandomQuestion() {
        setQuestion(getRandomElement(QUESTIONS as Question[]))
    }
    
    
    return <Col>
        <h1>Control Panel</h1>
        <Button onClick={() => reveal(!answerRevealed)}>Reveal Answer</Button>
        <Button onClick={setRandomQuestion}>New Question</Button>
    </Col>
}