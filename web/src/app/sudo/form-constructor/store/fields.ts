import { create } from "zustand";

type WidgetField = { id: number };

type State = {
  fields: WidgetField[];
};

type Actions = {
  create: (field: Partial<WidgetField>) => void;
  update: (id: number, field: Partial<WidgetField>) => void;
  sort: (srcId: number, dstId: number) => void;
  delete: (id: number) => void;
};

const useFieldsState = create<State & Actions>((set) => ({
  fields: [],

  create(field) {
    const widgetField = field as WidgetField;

    set((state) => ({
      ...state,
      fields: [...state.fields, widgetField],
    }));
  },

  update(id, field) {},

  sort() {},

  delete(id) {},
}));

export default useFieldsState;
