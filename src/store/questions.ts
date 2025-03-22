import { TopicName } from '@/types/topic';
import { create } from 'zustand';

interface QuestionTypeStore {
  type: TopicName;
  setType: (newType: TopicName) => void;
}

export const useQuestionTypeStore = create<QuestionTypeStore>((set) => ({
  type: "None", // initial type value
  setType: (newType) => set({ type: newType }), // updates the type state
}));
