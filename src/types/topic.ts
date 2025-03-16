import { LucideIcon } from "lucide-react";

// Topic interface representing a topic with an id, name, and description
export type TopicName = "Investing" | "Budgeting" | "Debt"| "None";

export interface Topic {
    id: number;
    name: TopicName;
    description: string;
    icon: LucideIcon;
}