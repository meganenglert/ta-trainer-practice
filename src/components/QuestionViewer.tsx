import { Col, Card, ButtonGroup, Button} from 'react-bootstrap';
import { Question } from '../interfaces/question';
import { Team } from '../interfaces/team';
import { TeamPointCounter } from './TeamPointCounter';

export function QuestionViewer({ question, answerRevealed, teams, addPoints, addTeamRevealed, revealAddTeam }:
    { question: Question, answerRevealed: boolean, teams: Team[], addPoints: (t: Team, p: number) => void,
        addTeamRevealed: boolean, revealAddTeam: (b: boolean)=>void } ): JSX.Element {
    
    function switchAddTeam() {
        revealAddTeam(!addTeamRevealed);
    }
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

        <TeamPointCounter teamList={teams} points={question.value} addPoints={addPoints} addTeamRevealed={addTeamRevealed} switchAddTeam={switchAddTeam}></TeamPointCounter>

        

    </Col>
}