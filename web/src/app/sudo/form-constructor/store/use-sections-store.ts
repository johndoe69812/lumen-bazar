import { arrayMove } from "@dnd-kit/sortable";
import { nanoid } from "nanoid";
import { create } from "zustand";

export type FieldsSection = {
  id: string;
  title: string;
};

type State = {
  list: FieldsSection[];
  activeId?: string;
};

type Actions = {
  setActiveId: (id: string) => void;
  create: (title: string) => void;
  update: (id: string, updates: Partial<FieldsSection>) => void;
  remove: (id: string) => void;
  move: (srcId: string, dstId: string) => void;
};

const useSectionsStore = create<State & Actions>((set) => ({
  selectedSection: undefined,
  list: [],

  setActiveId(id) {
    set((state) => {
      return { ...state, activeId: id };
    });
  },

  create(title) {
    set((state) => {
      return { ...state, list: [...state.list, { title, id: nanoid() }] };
    });
  },

  update(id, updates) {
    set((state) => {
      return {
        ...state,
        list: state.list.map((section) =>
          section.id === id ? { ...section, ...updates } : section
        ),
      };
    });
  },

  move(srcId, dstId) {
    set((state) => {
      const srcIndex = state.list.findIndex(({ id }) => id === srcId);
      const dstIndex = state.list.findIndex(({ id }) => id === dstId);

      return {
        ...state,
        list: arrayMove(state.list, srcIndex, dstIndex),
      };
    });
  },

  remove(id) {
    set((state) => {
      return {
        ...state,
        list: state.list.filter((section) => section.id !== id),
      };
    });
  },
}));

export default useSectionsStore;
