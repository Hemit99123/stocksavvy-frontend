import { LucideIcon } from "lucide-react";

// Topic interface representing a topic with an id, name, and description
export type TopicName = "Information and Ideas" | "Craft and Structure" | "Expression of Ideas" | "Standard English Conventions" | "None";

export interface Topic {
    id: number;
    name: TopicName;
    description: string;
    icon: LucideIcon;
}