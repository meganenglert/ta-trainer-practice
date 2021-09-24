export type roundType = 'Jeopardy!' | 'Double Jeopardy!' | 'Final Jeopardy!';

export interface Question {
    ID: number
    round: roundType
    category: string
    value: number
    Prompt: string
    Answer: string
}

