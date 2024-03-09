import {
  DndContext as DndCoreContext,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { FC, PropsWithChildren, useCallback } from "react";
import { SCENE_WIDGETS_ID } from "../scene-panel/constants";
import useFieldsState from "@/app/sudo/form-constructor/store/fields";

type Props = PropsWithChildren;

const DndContext: FC<Props> = (props) => {
  const { children } = props;

  const createField = useFieldsState((state) => state.create);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { over } = event;

      if (over?.id === SCENE_WIDGETS_ID) {
        createField({ id: Math.random() });
      }
    },
    [createField]
  );

  const handleDragOver = (event: DragOverEvent) => {
    console.log("over event", event);
  };

  return (
    <DndCoreContext onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
      {children}
    </DndCoreContext>
  );
};

export default DndContext;
