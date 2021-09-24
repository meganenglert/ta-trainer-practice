import { Button , Col} from 'react-bootstrap';
import { Question } from '../interfaces/question';


export function ControlPanel({setQuestion}: {setQuestion: (q: Question)=>void}): JSX.Element {
    return <Col>
        <h1>Control Panel</h1>
        {setQuestion}
        <Button>New Question</Button>
    </Col>
}