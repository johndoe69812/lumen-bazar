import { DragEvent } from "react";
import { WidgetType } from "../../widgets-config";

export const getWidgetType = (event: DragEvent<HTMLDivElement>) => {
  return event.dataTransfer.getData("text") as WidgetType;
};
