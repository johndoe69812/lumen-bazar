import React, { HTMLAttributes, PropsWithChildren } from "react";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import useFieldsState from "@/app/sudo/form-constructor/store/fields";
import SceneField from "./scene-field";
import { Empty, Flex, List, Typography } from "antd";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { SCENE_WIDGETS_ID } from "./constants";

type Props = PropsWithChildren<
  { id: UniqueIdentifier } & HTMLAttributes<HTMLElement>
>;

const EmptyWidgets = () => {
  return (
    <Empty
      description={
        <>
          <Typography.Title level={5}>No widgets in your form</Typography.Title>
          <Typography.Text>Drop some of them here</Typography.Text>
        </>
      }
    />
  );
};

const ScenePanel = () => {
  const fields = useFieldsState((state) => state.fields);
  const { setNodeRef } = useDroppable({ id: SCENE_WIDGETS_ID });

  const isEmpty = fields.length === 0;

  return (
    <SortableContext items={fields} strategy={rectSortingStrategy}>
      <div className="w-full h-full" ref={setNodeRef}>
        {isEmpty && <EmptyWidgets />}
        <List>
          {fields.map((field, index) => (
            <List.Item key={index}>
              <SceneField id={field.id} />
            </List.Item>
          ))}
        </List>
      </div>
    </SortableContext>
  );
};

export default ScenePanel;
