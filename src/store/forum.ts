import { FeatureType } from '@/types/forum';
import { create } from 'zustand';

interface ForumTypeStore {
  type: FeatureType;
  setType: (newType: FeatureType) => void;
}

export const useForumTypeStore = create<ForumTypeStore>((set) => ({
  type: "None", // initial type value
  setType: (newType) => set({ type: newType }), // updates the type state
}));
