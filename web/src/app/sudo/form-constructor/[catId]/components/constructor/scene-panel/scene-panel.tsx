import React, { useCallback, useRef } from "react";
import {
  Active,
  Over,
  UniqueIdentifier,
  useDndMonitor,
  useDroppable,
} from "@dnd-kit/core";
import useFieldsState from "@/app/sudo/form-constructor/store/use-scene-widgets";
import SceneField from "./scene-field";
import { Empty, List, Typography } from "antd";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SCENE_WIDGETS_ID } from "./constants";
import { WidgetField } from "../types";
import { Nullable } from "@/types/utils";
import { isString } from "lodash";
import { WidgetType } from "../widgets-config";
import { nanoid } from "nanoid";

const getType = (prop?: Nullable<Active | Over>) => {
  return prop?.data?.current?.type ?? null;
};

const ScenePanel = () => {
  const fields = useFieldsState((state) => state.fields);
  const deleteField = useFieldsState((state) => state.delete);
  const updateField = useFieldsState((state) => state.update);
  const createField = useFieldsState((state) => state.create);
  const moveFields = useFieldsState((state) => state.move);
  const spacerInsertedRef = useRef(false);
  const isInserted = useRef(false);

  const { setNodeRef } = useDroppable({ id: SCENE_WIDGETS_ID });

  const cleanup = () => {
    spacerInsertedRef.current = false;
    isInserted.current = false;
  };

  const getFieldIndex = useCallback(
    (id?: UniqueIdentifier) => {
      return fields.findIndex((f) => f.id === id);
    },
    [fields]
  );

  useDndMonitor({
    onDragStart(event) {
      const type = getType(event.active);

      if (type === "widgetInstance") {
        spacerInsertedRef.current = true;
      }
    },

    onDragOver(event) {
      if (!spacerInsertedRef.current) return;

      const type = getType(event.over);

      if (type === "sceneWidget") {
        const overPos = getFieldIndex(event.over?.id);
        const spacePos = getFieldIndex("placeholder");

        if (overPos !== spacePos) moveFields(overPos, spacePos);
      }

      if (!isInserted.current) {
        createField({ id: "placeholder" });
        isInserted.current = true;
      }
    },

    onDragEnd(event) {
      const activeId = event.active.id;
      const overId = event.over?.id;

      if (!isString(activeId)) {
        cleanup();
        return;
      }

      if (spacerInsertedRef.current) {
        updateField("placeholder", {
          id: nanoid(),
          type: activeId as WidgetType,
        });
      } else if (overId) {
        const overPos = getFieldIndex(overId as string);
        const spacePos = getFieldIndex(activeId);
        moveFields(overPos, spacePos);
      }

      cleanup();
    },

    onDragCancel() {
      deleteField("placeholder");
      cleanup();
    },
  });

  const isEmpty = fields.length === 0;

  return (
    <SortableContext items={fields} strategy={verticalListSortingStrategy}>
      <div className="w-full h-full" ref={setNodeRef}>
        {isEmpty && (
          <Empty
            description={
              <>
                <Typography.Title level={5}>
                  No widgets in your form
                </Typography.Title>
                <Typography.Text>Drop some of them here</Typography.Text>
              </>
            }
          />
        )}
        <List<WidgetField>
          locale={{
            emptyText: (
              <>
                <Typography.Title level={5}>
                  No widgets in your form
                </Typography.Title>
                <Typography.Text>Drop some of them here</Typography.Text>
              </>
            ),
          }}
        >
          {fields.map((field) => (
            <List.Item key={field.id}>
              <SceneField id={field.id} type={field.type} />
            </List.Item>
          ))}
        </List>
      </div>
    </SortableContext>
  );
};

export default ScenePanel;
