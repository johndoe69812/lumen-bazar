import { PlusOutlined } from "@ant-design/icons";
import { Affix, Button, Empty, Flex } from "antd";
import SectionItem from "./section-item";
import useSectionsStore from "@/app/sudo/form-constructor/store/use-sections-store";
import useSceneWidgets from "@/app/sudo/form-constructor/store/use-scene-widgets";
import { FC, useCallback, useMemo } from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { isString } from "lodash";

const sensorConfig = {
  activationConstraint: {
    distance: 30,
    delay: 20,
    tolerance: 5,
  },
};

const useFieldsCount = () => {
  const fields = useSceneWidgets((state) => state.fields);

  const sectionsToFieldsCount = useMemo(() => {
    return Object.keys(fields).reduce<Record<string, number>>((acc, key) => {
      acc[key] = fields[key].length;

      return acc;
    }, {});
  }, [fields]);

  return sectionsToFieldsCount;
};

const SectionList: FC = () => {
  const list = useSectionsStore((state) => state.list);
  const { activeId, create, move, update, remove, setActiveId } =
    useSectionsStore();
  const { setActiveSectionId } = useSceneWidgets();

  const mouseSensor = useSensor(MouseSensor, sensorConfig);

  const sensors = useSensors(mouseSensor);
  const fieldsCount = useFieldsCount();

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const activeId = event.active?.id;
      const overId = event.over?.id;

      if (isString(activeId) && isString(overId)) {
        move(activeId, overId);
      }
    },
    [move]
  );

  const isEmpty = list.length === 0;

  return (
    <div className="h-full">
      {isEmpty && <Empty description="No section found" />}
      <DndContext
        sensors={sensors}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={list} strategy={verticalListSortingStrategy}>
          <div>
            {list.map(({ id, title }) => (
              <SectionItem
                key={id}
                id={id}
                isActive={id === activeId}
                title={title}
                fieldsCount={fieldsCount[id]}
                onRename={(newName: string) => {
                  newName !== "" && update(id, { title: newName });
                }}
                onClick={() => {
                  setActiveId(id);
                  setActiveSectionId(id);
                }}
                onDelete={() => {
                  remove(id);
                }}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <Affix offsetBottom={0}>
        <Flex className="p-6 w-full" justify="stretch">
          <Button
            className="w-full"
            size="large"
            icon={<PlusOutlined />}
            onClick={() => create("New section")}
          >
            Add section
          </Button>
        </Flex>
      </Affix>
    </div>
  );
};

export default SectionList;
