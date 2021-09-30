import { Col, Card, ButtonGroup, Button} from 'react-bootstrap';
import { Question } from '../interfaces/question';



export function QuestionViewer({ question, answerRevealed }:
    { question: Question, answerRevealed: boolean } ): JSX.Element {
    
    
    return <Col>
        <h1>Question Viewer</h1>
        <Card bg="white" text="dark">
            <Card.Body>
                <Card.Title>Question:</Card.Title>
                <Card.Text>
                    {question.prompt}
                </Card.Text>
            </Card.Body>
            { answerRevealed && <Card.Body>
                <Card.Text>
                    {question.answer}
                </Card.Text>
            </Card.Body>}
        </Card>

        
        

    </Col>
}