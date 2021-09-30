export enum roundType {
    round1 = "Jeopardy!",
    round2 = "Double Jeopardy!",
    round3 = "Final Jeopardy!"
}

export interface Question {
    ID: number
    episode: number
    airdate: string
    round: roundType
    category: string
    value: number
    prompt: string
    answer: string
}