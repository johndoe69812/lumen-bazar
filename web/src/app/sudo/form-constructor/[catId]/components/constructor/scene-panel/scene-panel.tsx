import React, { HTMLAttributes, PropsWithChildren } from "react";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import useFieldsState from "@/app/sudo/form-constructor/store/fields";
import SceneField from "./scene-field";
import { Flex } from "antd";
import { SortableContext } from "@dnd-kit/sortable";

type Props = PropsWithChildren<
  { id: UniqueIdentifier } & HTMLAttributes<HTMLElement>
>;

export const Droppable = (props: Props) => {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return <div ref={setNodeRef}>{props.children}</div>;
};

const ScenePanel = () => {
  const fields = useFieldsState((state) => state.fields);

  return (
    <div className="w-full h-full">
      <Droppable id="drop">
        <Flex gap={16} vertical>
          <SortableContext items={fields}>
            {fields.map((field, index) => (
              <SceneField id={field.id} key={index} />
            ))}
          </SortableContext>
        </Flex>
      </Droppable>
    </div>
  );
};

export default ScenePanel;
