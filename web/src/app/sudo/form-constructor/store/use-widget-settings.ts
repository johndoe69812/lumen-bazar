import { create } from "zustand";

type WidgetId = string;

type SettingParam = Record<string, unknown>;

type State = {
  settings: Record<WidgetId, SettingParam>;
};

type Actions = {
  update: (id: string, updates: SettingParam) => void;
};

const useWidgetSettings = create<State & Actions>((set) => ({
  settings: {},

  update(id, updates) {
    set((state) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          [id]: { ...state.settings[id], updates },
        },
      };
    });
  },
}));

export default useWidgetSettings;
