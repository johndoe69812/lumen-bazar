import { WidgetType } from "../../widgets-config";

const groupWidgets: WidgetType[] = ["groupWidget", "checkboxGroup"];

export const isGroupWidget = (widgetType: WidgetType) => {
  return groupWidgets.includes(widgetType);
};
