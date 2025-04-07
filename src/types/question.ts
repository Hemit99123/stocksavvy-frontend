import { TopicName } from "./item";

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