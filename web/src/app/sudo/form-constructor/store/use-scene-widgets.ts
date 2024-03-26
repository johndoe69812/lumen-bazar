import { arrayMove, arraySwap } from "@dnd-kit/sortable";
import { create } from "zustand";
import { WidgetType } from "../[catId]/components/constructor/widgets-config";
import { nanoid } from "nanoid";
import { immer } from "zustand/middleware/immer";
import merge from "lodash/merge";

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
  update: (
    id: string,
    field: Partial<WidgetField>,
    parentFieldId?: string
  ) => void;
  move: (srcIndex: number, dstIndex: number) => void;
  swap: (srcIndex: number, dstIndex: number) => void;
  delete: (id: string) => void;
  clone: (id: string) => void;
};

const useSceneWidgets = create<State & Actions>()(
  immer((set) => ({
    fields: {},
    activeId: undefined,
    activeSectionId: undefined,

    setActiveId(id) {
      set((state) => {
        state.activeId = id;
      });
    },

    setActiveSectionId(sectionId) {
      set((state) => {
        state.activeSectionId = sectionId;
        state.fields[sectionId] = state.fields[sectionId] ?? [];
      });
    },

    create(field, insertPos) {
      const widgetField = field as WidgetField;

      console.log("insertPos", insertPos);

      set((state) => {
        const { activeSectionId } = state;
        if (!activeSectionId) return;

        let newFields = [...state.fields[activeSectionId], widgetField];

        if (insertPos) {
          newFields = arrayMove(newFields, newFields.length - 1, insertPos);
        }

        state.fields[activeSectionId] = newFields;
      });
    },

    createChild(parentId, candidateField, insertPos = 0) {
      const widgetField = candidateField as WidgetField;

      set((state) => {
        const { activeSectionId } = state;
        if (!activeSectionId) return;

        state.fields[activeSectionId].forEach((field) => {
          if (field.id === parentId) {
            field.children = field.children ?? [];
            field.children.push(widgetField);
          }
        });
      });
    },

    deleteChild(parentId, childId) {
      set((state) => {
        const { activeSectionId } = state;
        if (!activeSectionId) return;

        const targetField = state.fields[activeSectionId].find(
          (field) => field.id === parentId
        );

        if (!targetField) return;

        targetField.children = targetField?.children?.filter(
          (child) => child.id !== childId
        );
      });
    },

    update(id, updates, parentFieldId) {
      set((state) => {
        const { activeSectionId } = state;
        if (!activeSectionId) return;

        if (!parentFieldId) {
          let target = state.fields[activeSectionId]?.find(
            (field) => field.id === id
          );

          target = merge(target, updates);
        }

        if (parentFieldId) {
          const target = state.fields[activeSectionId]?.find(
            (field) => field.id === parentFieldId
          );

          target &&
            target?.children?.forEach((field) => {
              if (field.id === id) {
                field = merge(field, updates);
              }
            });
        }
      });
    },

    move(srcIndex, dstIndex) {
      set((state) => {
        const { activeSectionId } = state;
        if (!activeSectionId) return state;

        state.fields[activeSectionId] = arrayMove(
          state.fields[activeSectionId],
          srcIndex,
          dstIndex
        );
      });
    },

    swap(srcIndex, dstIndex) {
      set((state) => {
        const { activeSectionId } = state;
        if (!activeSectionId) return state;

        state.fields[activeSectionId] = arraySwap(
          state.fields[activeSectionId],
          srcIndex,
          dstIndex
        );
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
  }))
);

export default useSceneWidgets;
