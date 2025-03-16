import { TopicName } from "./topic";

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