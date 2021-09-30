import { Col, Card, ButtonGroup, Button } from 'react-bootstrap';
import { Question } from '../interfaces/question';
import { Team } from '../interfaces/team';

export function TeamPointCounter({ team1 }:
    { team1: Team }): JSX.Element {
    return <div id="scores">
        <h1>Scoreboard</h1>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Team 1</Card.Title>
                <Card.Text>
                    {team1.score}
                </Card.Text>

                <ButtonGroup id="change-points">
                    <Button variant="success">Correct!</Button>
                    <Button variant="danger">Incorrect!</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>


    </div >
}