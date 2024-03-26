import { DragEvent, DragEventHandler, FC, useCallback, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import useFieldsState, {
  WidgetField,
} from "@/app/sudo/form-constructor/store/use-scene-widgets";
import SceneField from "./scene-field";
import { Empty, Flex, Typography } from "antd";
import { SortableContext } from "@dnd-kit/sortable";
import { WidgetType } from "../widgets-config";
import { nanoid } from "nanoid";
import useSectionsStore from "@/app/sudo/form-constructor/store/use-sections-store";
import PlaceholderItem from "../../placeholder-item";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { getWidgetType } from "./utils";

type Props = { fields: WidgetField[] };

const ScenePanel: FC<Props> = (props) => {
  const { fields } = props;

  const activeSection = useSectionsStore((state) => state.activeId);
  const actions = useFieldsState((state) => {
    const { fields, ...actions } = state;
    return actions;
  });

  const handleDrop: DragEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.stopPropagation();
      const type = getWidgetType(event);

      let field = {
        id: nanoid(),
        sectionId: activeSection,
        type,
      };

      actions.create(field);
    },
    [activeSection, actions]
  );

  const handleDragOver: DragEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  // handle dnd in children
  useEffect(() => {
    const placeholders = document.querySelectorAll<HTMLDivElement>(
      "[data-dnd-id='placeholder']"
    );

    placeholders.forEach((item, index) => {
      item.ondragenter = () => {
        item.classList.add("active");
      };

      item.ondragleave = () => {
        item.classList.remove("active");
      };

      item.onmouseover = (event) => {
        event?.preventDefault();
      };

      item.ondrop = (event) => {
        event.stopPropagation();

        let updates = {
          id: nanoid(),
          sectionId: activeSection,
          type: getWidgetType(event as unknown as DragEvent<HTMLDivElement>),
        };

        actions.create(updates, index + 1);
        item.classList.remove("active");
      };
    });
  }, [fields, actions, activeSection]);

  const isEmpty = fields?.length === 0;

  return (
    <div
      className="w-full h-full"
      id="fields-scene"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isEmpty && (
        <>
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
          <PlaceholderItem data-dnd-id="placeholder" key="base-placeholder" />
        </>
      )}
      <Flex gap={0} vertical id="list">
        <DndContext modifiers={[restrictToVerticalAxis]}>
          <SortableContext items={fields}>
            {fields.map((field, index) => (
              <>
                <div
                  key={field.id}
                  data-dnd-id="field"
                  style={{
                    marginBottom: 16,
                    padding: 0,
                    pointerEvents: field?.id === "placeholder" ? "none" : "all",
                  }}
                  onDragEnter={(event) => {
                    event?.stopPropagation();
                    event.preventDefault();
                  }}
                >
                  <SceneField
                    id={field.id}
                    type={field.type}
                    onClone={() => actions.clone(field.id)}
                    onDelete={() => actions.delete(field.id)}
                    fields={field.children}
                  />
                </div>
                <PlaceholderItem
                  data-dnd-id="placeholder"
                  key={`${index}-placeholder`}
                />
              </>
            ))}
          </SortableContext>
        </DndContext>
      </Flex>
    </div>
  );
};

export default ScenePanel;
