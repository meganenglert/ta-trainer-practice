import { Col, Card, ButtonGroup, Button, Row } from 'react-bootstrap';
import { Question } from '../interfaces/question';
import { Team } from '../interfaces/team';

export function TeamPointCounter({teamList, points, addPoints, addTeamRevealed, switchAddTeam }:
    { teamList: Team[], points: number, addPoints: (t: Team, p: number) => void,
        addTeamRevealed: boolean, switchAddTeam: ()=>void }): JSX.Element {

    return <div id="scores">
        <h1>Scoreboard</h1>
        <Row xs={1} md={2} className="g-4">
            {teamList.map((team) => (
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Team {team.ID}</Card.Title>
                            <Card.Text>
                                {team.score}
                            </Card.Text>

                            <ButtonGroup id="change-points">
                                <Button onClick={() => addPoints(team, points)} variant="success">Correct!</Button>
                                <Button onClick={() => addPoints(team, -points)} variant="danger">Incorrect!</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        <Button onClick={switchAddTeam} id="add-team">+ Add Team</Button>
        {addTeamRevealed && <Card.Body>
                <Card.Text>
                    woohoo
                </Card.Text>
            </Card.Body>}
    </div >

    

}

