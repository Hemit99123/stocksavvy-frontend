import { Book, Layout, PenTool, SpellCheck } from "lucide-react";
import { Topic } from "@/types/topic";

export const topics: Topic[] = [
  { id: 1, name: "Information and Ideas", description: "Topic 1", icon: Book },
  { id: 2, name: "Craft and Structure", description: "Topic 2", icon: Layout },
  { id: 3, name: "Expression of Ideas", description: "Topic 3", icon: PenTool },
  { id: 4, name: "Standard English Conventions", description: "Topic 4", icon: SpellCheck },
];
