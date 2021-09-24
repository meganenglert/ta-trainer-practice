import { Col, Card } from 'react-bootstrap';
import { Question } from '../interfaces/question';

export function QuestionViewer({ question, answerRevealed }:
    { question: Question, answerRevealed: boolean }): JSX.Element {
    return <Col>
        <h1>Question Viewer</h1>
        <Card style={{ width: '18rem' }}>
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