import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"
import { Question, roundType } from "../interfaces/question";

export function AddCardModal({ visible, setVisible, addCard }:
    { visible: boolean, setVisible: (b: boolean) => void, addCard: (q: Question) => void }): JSX.Element {
    const [category, setCategory] = useState<string>("NO CATEGORY");
    const [prompt, setPrompt] = useState<string>("PROMPT TEXT");
    const [answer, setAnswer] = useState<string>("ANSWER TEXT");

    function saveCard() {
        console.log("SAVING", category, prompt, answer);
        addCard({
            ID: Math.random(),
            episode: -1,
            airdate: "custom",
            round: roundType.round1,
            category: category,
            value: 500,
            prompt: prompt,
            answer: answer
        });

        setVisible(false);
    }
    const hide = () => setVisible(false);
    return (
        <Modal show={visible} onHide={() => setVisible(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="addCardForm.categoryTextArea">
                        <Form.Label>Question Category</Form.Label>
                        <Form.Control as="textarea" rows={1}
                            value={category}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCategory(ev.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addCardForm.questionTextArea">
                        <Form.Label>Question</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            value={prompt}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(ev.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addCardForm.answerTextArea">
                        <Form.Label>Correct Answer</Form.Label>
                        <Form.Control as="textarea" rows={1}
                            value={answer}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setAnswer(ev.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={hide}>Close</Button>
                <Button variant="primary" onClick={saveCard}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    )

}


