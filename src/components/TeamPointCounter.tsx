import React, { useState } from 'react';
import { Col, Card, ButtonGroup, Button, Row, InputGroup, FormControl } from 'react-bootstrap';
import { Team } from '../interfaces/team';

export function TeamPointCounter({ teamList, points, addPoints, addTeamRevealed, switchAddTeam, addTeam }:
    {
        teamList: Team[], points: number, addPoints: (t: Team, p: number) => void,
        addTeamRevealed: boolean, switchAddTeam: () => void, addTeam: (t: Team) => void
    }): JSX.Element {

    const [teamName, setTeamName] = useState<string>("NEW TEAM");

    function addNewTeam() {
        addTeam({
            ID: teamList.length + 1,
            name: teamName,
            score: 0
        })
        switchAddTeam();
    }
    return <div id="scores">
        <h1>Scoreboard</h1>
        <Row xs={1} md={2} className="g-4">
            {teamList.map((team) => (
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Team {team.name}</Card.Title>
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
        <div>
        <Button className = "m-4" variant="light" onClick={switchAddTeam} id="add-team">+ Add Team</Button>
        {addTeamRevealed && <Card.Body>
            <InputGroup className="mb-3">
                <FormControl
                    type="string" placeholder="New Team Name" value={teamName} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setTeamName(ev.target.value)}
                />
                <Button onClick={addNewTeam} variant="outline-secondary" id="add-new-team">
                    Add!
                </Button>
            </InputGroup>
        </Card.Body>}
        </div>
    </div >



}

