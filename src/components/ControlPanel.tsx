import { Button , Col} from 'react-bootstrap';
import { Question } from '../interfaces/question';
import QUESTIONS from '../assets/1000questions.json';

// Same source as Dr. Bart used (I am lazy)
function getRandomElement<T>(items: T[]): T  {
    return items[Math.floor(Math.random()*items.length)];
}

export function ControlPanel({setQuestion}: {setQuestion: (q: Question)=>void}): JSX.Element {
    
    function setRandomQuestion() {
        setQuestion(getRandomElement(QUESTIONS as Question[]))
    }
    
    
    return <Col>
        <h1>Control Panel</h1>
        {setQuestion}
        <Button onClick={setRandomQuestion}>New Question</Button>
    </Col>
}