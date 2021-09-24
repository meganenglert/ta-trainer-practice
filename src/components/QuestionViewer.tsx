import {Col} from 'react-bootstrap';
import { Question } from '../interfaces/question';

export function QuestionViewer({question} : {question: Question}): JSX.Element {
    return <Col>
        <h1>Question Viewer</h1>
        <div>Current Question: {question.prompt}</div>
    </Col>
}