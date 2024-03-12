import { arrayMove } from "@dnd-kit/sortable";
import { create } from "zustand";
import { WidgetType } from "../[catId]/components/constructor/widgets-config";

export type WidgetField = {
  id: string;
  type: WidgetType;
  sectionId: string;
  isPlaceholder?: boolean;
};

type State = {
  fields: Record<string, WidgetField[]>;
  activeId?: string;
  activeSectionId?: string;
};

type Actions = {
  setActiveId: (id: string) => void;
  setActiveSectionId: (id: string) => void;
  create: (field: Partial<WidgetField>, insertPos?: number) => void;
  update: (id: string, field: Partial<WidgetField>) => void;
  move: (srcIndex: number, dstIndex: number) => void;
  delete: (id: string) => void;
};

const useSceneWidgets = create<State & Actions>((set) => ({
  fields: {},
  activeId: undefined,
  activeSectionId: undefined,

  setActiveId(id) {
    set((state) => {
      return {
        ...state,
        activeId: id,
      };
    });
  },

  setActiveSectionId(sectionId) {
    set((state) => {
      const newState = {
        ...state,
        activeSectionId: sectionId,
      };

      if (!state.fields[sectionId]) {
        newState.fields[sectionId] = [];
      }

      return newState;
    });
  },

  create(field, insertPos = 0) {
    const widgetField = field as WidgetField;

    set((state) => {
      const { activeSectionId } = state;
      if (!activeSectionId) return state;

      let newItems = [...state.fields[activeSectionId], widgetField];

      return {
        ...state,
        fields: {
          ...state.fields,
          [activeSectionId]: arrayMove(
            newItems,
            newItems.length - 1,
            insertPos
          ),
        },
      };
    });
  },

  update(id, updates) {
    set((state) => {
      const { activeSectionId } = state;
      if (!activeSectionId) return state;

      return {
        ...state,
        fields: {
          ...state.fields,
          [activeSectionId]: state.fields[activeSectionId].map((field) => {
            return field.id === id ? { ...field, ...updates } : field;
          }),
        },
      };
    });
  },

  move(srcIndex, dstIndex) {
    set((state) => {
      const { activeSectionId } = state;
      console.log("src", srcIndex, dstIndex);
      if (!activeSectionId) return state;

      return {
        ...state,
        fields: {
          ...state.fields,
          [activeSectionId]: arrayMove(
            state.fields[activeSectionId],
            srcIndex,
            dstIndex
          ),
        },
      };
    });
  },

  delete(id) {
    set((state) => {
      const { activeSectionId } = state;
      if (!activeSectionId) return state;

      return {
        ...state,
        fields: {
          ...state.fields,
          [activeSectionId]: state.fields[activeSectionId].filter(
            (field) => field.id !== id
          ),
        },
      };
    });
  },
}));

export default useSceneWidgets;
