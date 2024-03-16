import { Nullable } from "@/types/utils";
import { Active, Over } from "@dnd-kit/core";

export const getDraggableType = (prop?: Nullable<Active | Over>) => {
  return prop?.data?.current?.type ?? null;
};
