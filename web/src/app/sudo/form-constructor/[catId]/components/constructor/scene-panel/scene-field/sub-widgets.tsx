import useSceneWidgets, {
  WidgetField,
} from "@/app/sudo/form-constructor/store/use-scene-widgets";
import { useSortable } from "@dnd-kit/sortable";
import {
  DragEventHandler,
  FC,
  PropsWithChildren,
  memo,
  useCallback,
} from "react";
import PlaceholderItem from "../../../placeholder-item";
import { Flex } from "antd";
import SceneField from ".";
import { DndContext, useDndMonitor, useDroppable } from "@dnd-kit/core";
import { nanoid } from "nanoid";
import { WidgetType } from "../../widgets-config";
import { getWidgetType, isGroupWidget } from "../utils";

type Props = {
  fieldId: string;
};

const SubWidgets: FC<Props> = (props) => {
  const { fieldId } = props;

  const { listeners, transform, transition, setNodeRef } = useSortable({
    id: `${fieldId}:children`,
    data: {
      type: "subWidgets",
    },
  });

  const createChild = useSceneWidgets((state) => state.createChild);
  // useDndMonitor({
  //   onDragOver(event) {
  //     const over = event.over;

  //     console.log("child over", over);
  //   },
  // });

  const fields = useSceneWidgets((state) =>
    state.activeSectionId
      ? state.fields[state.activeSectionId]?.find(
          (field) => field.id === fieldId
        )?.children
      : []
  );

  const handleDragEnter: DragEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log("onDragEnter IN CHILD");
    },
    []
  );

  const handleDrop: DragEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const type = getWidgetType(event);
      const isGroup = isGroupWidget(type);

      !isGroup && createChild(fieldId, { id: nanoid(), type });
    },
    [fieldId, createChild]
  );

  return (
    <div
      className="min-h-8 flex flex-col justify-center gap-2 bg-red-100"
      data-dnd-id="field-children"
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
    >
      {fields?.map((field) => {
        const isPlaceholder = field.id === "placeholder";

        return (
          <div key={fieldId}>
            {isPlaceholder && <PlaceholderItem />}
            {!isPlaceholder && (
              <SceneField
                id={field.id}
                type={field.type}
                onClone={() => {}}
                onDelete={() => {}}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const Wrapper = (props: Props) => {
  return <SubWidgets fieldId={props.fieldId} />;
};

export default Wrapper;
