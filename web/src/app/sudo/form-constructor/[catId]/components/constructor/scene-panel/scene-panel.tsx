import React, { FC, useCallback, useEffect, useRef } from "react";
import { UniqueIdentifier, useDndMonitor, useDroppable } from "@dnd-kit/core";
import useFieldsState, {
  WidgetField,
} from "@/app/sudo/form-constructor/store/use-scene-widgets";
import SceneField from "./scene-field";
import { Empty, List, Typography } from "antd";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SCENE_WIDGETS_ID, initialDragMeta } from "./constants";
import { isString } from "lodash";
import { WidgetType } from "../widgets-config";
import { nanoid } from "nanoid";
import useSectionsStore from "@/app/sudo/form-constructor/store/use-sections-store";
import { getDraggableType } from "./scene-field/utils";

type Props = { fields: WidgetField[] };

const ScenePanel: FC<Props> = (props) => {
  const { fields } = props;

  const activeSection = useSectionsStore((state) => state.activeId);
  const deleteField = useFieldsState((state) => state.delete);
  const updateField = useFieldsState((state) => state.update);
  const createField = useFieldsState((state) => state.create);
  const createChildField = useFieldsState((state) => state.createChild);
  const deleteChildField = useFieldsState((state) => state.deleteChild);
  const cloneField = useFieldsState((state) => state.clone);
  const moveFields = useFieldsState((state) => state.move);
  const dragMeta = useRef(initialDragMeta);

  const { setNodeRef } = useDroppable({ id: SCENE_WIDGETS_ID });

  const cleanup = () => {
    dragMeta.current = { ...initialDragMeta };
  };

  useEffect(() => {
    cleanup();
  }, []);

  const getFieldIndex = useCallback(
    (id?: UniqueIdentifier) => {
      return fields.findIndex((f) => f.id === id);
    },
    [fields]
  );

  useDndMonitor({
    onDragStart(event) {
      const type = getDraggableType(event.active);

      if (type === "widgetInstance") {
        dragMeta.current.fromWidgets = true;
      }
    },

    onDragOver(event) {
      const overId = String(event.over?.id);
      const type = getDraggableType(event.over);

      const isOverChildren = String(overId).endsWith("children");
      const isOverSceneItem = type === "sceneWidget";
      const isOverScene = overId === "scene-widgets";

      if (!dragMeta.current.fromWidgets) {
        cleanup();
        return;
      }

      if (isOverChildren) {
        const overFieldId = overId.split(".")[0];

        createChildField(overFieldId, { id: "placeholder" });
        dragMeta.current.placeholderInField = overFieldId;
        deleteField("placeholder");
        dragMeta.current.placeholderIsInserted = false;
        return;
      }

      if (isOverSceneItem) {
        const overPos = getFieldIndex(overId);
        const placeholderPos = getFieldIndex("placeholder");

        if (overPos !== placeholderPos) moveFields(overPos, placeholderPos);
      }

      if (dragMeta.current.placeholderInField) {
        deleteChildField(dragMeta.current.placeholderInField, "placeholder");
      }

      if (!dragMeta.current.placeholderIsInserted) {
        console.log("placeholder inserted");
        createField({ id: "placeholder" });
        console.log(
          "placeholderIsInserted",
          dragMeta.current.placeholderIsInserted
        );
        dragMeta.current.placeholderIsInserted = true;
      }
    },

    onDragEnd(event) {
      const activeId = event.active.id;
      const overId = event.over?.id;

      if (!isString(activeId)) {
        cleanup();
        return;
      }

      if (dragMeta.current.fromWidgets) {
        updateField("placeholder", {
          id: nanoid(),
          sectionId: activeSection,
          type: activeId as WidgetType,
        });
      } else if (overId) {
        const overPos = getFieldIndex(overId as string);
        const spacePos = getFieldIndex(activeId);
        moveFields(spacePos, overPos);
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
    <SortableContext
      id="scene"
      items={fields}
      strategy={verticalListSortingStrategy}
    >
      <div className="w-full h-full" ref={setNodeRef}>
        {isEmpty && (
          <Empty
            description={
              <>
                <Typography.Title level={5}>
                  No widgets in this section
                </Typography.Title>
                <Typography.Text>Drop some of them here</Typography.Text>
              </>
            }
          />
        )}
        <List<WidgetField>>
          {fields.map((field) => (
            <List.Item key={field.id}>
              <SceneField
                id={field.id}
                type={field.type}
                onClone={() => cloneField(field.id)}
                onDelete={() => deleteField(field.id)}
                children={field.children}
              />
            </List.Item>
          ))}
        </List>
      </div>
    </SortableContext>
  );
};

const ScenePanelContainer: FC = () => {
  const activeSection = useSectionsStore((state) => state.activeId);

  const fields = useFieldsState((state) =>
    activeSection ? state.fields[activeSection] : []
  );

  if (!activeSection) {
    return <Empty description="Please Choose the section from left side" />;
  }

  return <ScenePanel fields={fields} />;
};

export default ScenePanelContainer;
