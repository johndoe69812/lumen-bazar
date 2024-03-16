import { arrayMove } from "@dnd-kit/sortable";
import { create } from "zustand";
import { WidgetType } from "../[catId]/components/constructor/widgets-config";
import { nanoid } from "nanoid";

export type WidgetField = {
  id: string;
  type: WidgetType;
  sectionId: string;
  isPlaceholder?: boolean;
  children?: WidgetField[];
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
  createChild: (
    id: string,
    field: Partial<WidgetField>,
    insertPos?: number
  ) => void;
  deleteChild: (parentId: string, childId: string) => void;
  update: (id: string, field: Partial<WidgetField>) => void;
  move: (srcIndex: number, dstIndex: number) => void;
  delete: (id: string) => void;
  clone: (id: string) => void;
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

  create(field, insertPos) {
    const widgetField = field as WidgetField;

    set((state) => {
      const { activeSectionId } = state;
      if (!activeSectionId) return state;

      let newItems = [...state.fields[activeSectionId], widgetField];

      return {
        ...state,
        fields: {
          ...state.fields,
          [activeSectionId]: insertPos
            ? arrayMove(newItems, newItems.length - 1, insertPos)
            : newItems,
        },
      };
    });
  },

  createChild(parentId, candidateField, insertPos = 0) {
    const widgetField = candidateField as WidgetField;

    set((state) => {
      const { activeSectionId } = state;
      if (!activeSectionId) return state;

      return {
        ...state,
        fields: {
          ...state.fields,
          [activeSectionId]: state.fields[activeSectionId].map((field) => {
            if (field.id === parentId) {
              field.children = field.children ?? [];
              field.children.push(widgetField);
            }

            return field;
          }),
        },
      };
    });
  },

  deleteChild(parentId, childId) {
    set((state) => {
      const { activeSectionId } = state;
      if (!activeSectionId) return state;

      return {
        ...state,
        fields: {
          ...state.fields,
          [activeSectionId]: state.fields[activeSectionId].map((field) =>
            field.id === parentId
              ? {
                  ...field,
                  children: field.children?.filter(
                    (child) => child.id !== childId
                  ),
                }
              : field
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

  clone(id) {
    set((state) => {
      const { activeSectionId } = state;
      if (!activeSectionId) return state;

      return {
        ...state,
        fields: {
          ...state.fields,
          [activeSectionId]: state.fields[activeSectionId].reduce<
            WidgetField[]
          >((acc, field) => {
            if (field.id === id) {
              acc.push(field, { ...field, id: nanoid() });
            } else {
              acc.push(field);
            }

            return acc;
          }, []),
        },
      };
    });
  },
}));

export default useSceneWidgets;
