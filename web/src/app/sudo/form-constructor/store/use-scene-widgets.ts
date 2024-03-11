// import { arrayMove } from "@dnd-kit/sortable";
import { create } from "zustand";
import { WidgetType } from "../[catId]/components/constructor/widgets-config";

export function arrayMove<T>(array: T[], from: number, to: number): T[] {
  const deepClonedArray = array.map((item) => JSON.parse(JSON.stringify(item)));
  const newArray = deepClonedArray.slice();
  newArray.splice(
    to < 0 ? newArray.length + to : to,
    0,
    newArray.splice(from, 1)[0]
  );

  return newArray;
}

type WidgetField = { id: string; type: WidgetType; isPlaceholder?: boolean };

type State = {
  fields: WidgetField[];
  activeId?: string;
};

type Actions = {
  setActiveId: (id: string) => void;
  create: (field: Partial<WidgetField>, insertPos?: number) => void;
  update: (id: string, field: Partial<WidgetField>) => void;
  move: (srcIndex: number, dstIndex: number) => void;
  delete: (id: string) => void;
};

const useSceneWidgets = create<State & Actions>((set) => ({
  fields: [],
  activeId: undefined,

  setActiveId(id: string) {
    set((state) => {
      return {
        ...state,
        activeId: id,
      };
    });
  },

  create(field, insertPos = 0) {
    const widgetField = field as WidgetField;

    set((state) => {
      let newItems = [...state.fields, widgetField];
      return {
        ...state,
        fields: arrayMove(newItems, newItems.length - 1, insertPos),
      };
    });
  },

  update(id, updates) {
    set((state) => {
      return {
        ...state,
        fields: state.fields.map((field) => {
          return field.id === id ? { ...field, ...updates } : field;
        }),
      };
    });
  },

  move(srcIndex, dstIndex) {
    set((state) => {
      return {
        ...state,
        fields: arrayMove(state.fields, srcIndex, dstIndex),
      };
    });
  },

  delete(id) {
    set((state) => {
      return {
        ...state,
        fields: state.fields.filter((field) => field.id !== id),
      };
    });
  },
}));

export default useSceneWidgets;
