import { Book, Layout, PenTool } from "lucide-react";
import { Topic } from "@/types/topic";

export const topics: Topic[] = [
  { id: 1, name: "Investing", description: "Topic 1", icon: Book },
  { id: 2, name: "Budgeting", description: "Topic 2", icon: Layout },
  { id: 3, name: "Debt", description: "Topic 3", icon: PenTool },
];
