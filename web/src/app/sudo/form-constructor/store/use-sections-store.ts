import { create } from "zustand";

type FieldsSection = {
  id: number;
  title: string;
};

type State = {
  list: FieldsSection[];
  activeId?: number;
};

type Actions = {
  setActiveId: (id: number) => void;
  create: (section: FieldsSection) => void;
  update: (id: number, updates: Partial<FieldsSection>) => void;
  delete: (id: number) => void;
};

const useSectionsStore = create<State & Actions>((set) => ({
  selectedSection: undefined,
  list: [],

  setActiveId(id) {
    set((state) => {
      return { ...state, activeId: id };
    });
  },

  create(section) {
    set((state) => {
      return { ...state, list: [...state.list, section] };
    });
  },

  update(id, updates) {
    set((state) => {
      return {
        ...state,
        list: state.list.map((section) =>
          section.id === id ? { ...section, updates } : section
        ),
      };
    });
  },

  delete(id) {
    set((state) => {
      return {
        ...state,
        list: state.list.filter((section) => section.id !== id),
      };
    });
  },
}));

export default useSectionsStore;
