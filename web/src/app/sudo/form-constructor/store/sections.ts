import { create } from "zustand";

type State = {
  selectedSection?: number;
};

type Actions = {
  setSelectedSection: (index: number) => void;
};

const useSectionsStore = create<State & Actions>((set) => ({
  selectedSection: undefined,
  setSelectedSection: (index: number) => {
    set({ selectedSection: index });
  },
}));

export default useSectionsStore;
