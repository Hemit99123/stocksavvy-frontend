interface Option {
    letter: string;
    text: string;
}

export interface Question {
    question: string;
    options: Option[];
    type: TopicName;
    correctAnswer: string;
}

// Topic interface representing a topic with an id, name, and description
export type TopicName = "Investing" | "Budgeting" | "Debt"| "None";