import { Nullable } from "@/types/utils";

export const SCENE_WIDGETS_ID = "scene-widgets";

type DragMeta = {
  fromWidgets: boolean;
  placeholderIsInserted: boolean;
  placeholderInField: Nullable<string>;
};

export const initialDragMeta: DragMeta = {
  fromWidgets: false,
  placeholderIsInserted: false,
  placeholderInField: null,
};
