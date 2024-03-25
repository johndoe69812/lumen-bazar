import React, {
  DragEventHandler,
  FC,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { DndContext, UniqueIdentifier } from "@dnd-kit/core";
import useFieldsState, {
  WidgetField,
} from "@/app/sudo/form-constructor/store/use-scene-widgets";
import SceneField from "./scene-field";
import { Empty, Flex, Typography } from "antd";
import { SortableContext } from "@dnd-kit/sortable";
import { initialDragMeta } from "./constants";
import { debounce } from "lodash";
import { WidgetType } from "../widgets-config";
import { nanoid } from "nanoid";
import useSectionsStore from "@/app/sudo/form-constructor/store/use-sections-store";
import PlaceholderItem from "../../placeholder-item";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

type Props = { fields: WidgetField[] };

const ScenePanel: FC<Props> = (props) => {
  const { fields } = props;

  const activeSection = useSectionsStore((state) => state.activeId);
  const actions = useFieldsState((state) => {
    const { fields, ...actions } = state;
    return actions;
  });
  const dragMeta = useRef({ ...initialDragMeta });

  const getFieldIndex = useCallback(
    (id?: UniqueIdentifier) => {
      return fields.findIndex((f) => f.id === id);
    },
    [fields]
  );

  const moveItems = debounce((src, dst) => actions.move(src, dst), 50);

  const createPlaceholderField = () => {
    actions.create({ id: "placeholder" });
    dragMeta.current.placeholderIsInserted = true;
  };

  const handleDragEnter: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    if (
      (event.target as HTMLDivElement).id === "fields-scene" &&
      !dragMeta.current.placeholderIsInserted
    ) {
      createPlaceholderField();
    }
  };

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

      item.ondrop = () => {
        let updates = {
          id: nanoid(),
          sectionId: activeSection,
          type: "selectWidget" as WidgetType,
        };

        actions.create(updates, index);
        item.classList.remove("active");
      };
    });
  }, [fields, actions, activeSection]);

  const isEmpty = fields?.length === 0;

  return (
    <div
      className="w-full h-full"
      id="fields-scene"
      onDragEnter={handleDragEnter}
      onDragOver={(event) => {
        event.preventDefault();
      }}
      onDrop={(event) => {
        let updates = {
          id: nanoid(),
          sectionId: activeSection,
          type: "selectWidget" as WidgetType,
        };

        actions.update("placeholder", updates);
        dragMeta.current.placeholderIsInserted = false;
        event.stopPropagation();
      }}
    >
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
                  onMouseEnter={() => {
                    console.log("mouseenter");
                  }}
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
