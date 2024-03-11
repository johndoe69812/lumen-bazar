import { Button, Col, Flex, Input, Row, Tooltip, Typography } from "antd";
import { MdDragIndicator } from "@react-icons/all-files/md/MdDragIndicator";
import { DeleteOutlined, SettingOutlined } from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FC, memo, useState } from "react";
import clsx from "clsx";
import { WidgetType } from "../../widgets-config";
import useSceneWidgets from "@/app/sudo/form-constructor/store/use-scene-widgets";

type Props = {
  id: string;
  type: WidgetType | "placeholder";
};
const SceneField: FC<Props> = (props) => {
  const { id, type } = props;

  const { listeners, setNodeRef, transform, transition } = useSortable({
    id,
    data: {
      type: "sceneWidget",
    },
  });

  const [activeId, setActiveId] = useSceneWidgets((state) => [
    state.activeId,
    state.setActiveId,
  ]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  if (id === "placeholder") {
    return (
      <div className="relative w-full h-24 flex justify-center items-center rounded-lg bg-indigo-100 border-2 border-indigo-400 border-dashed shadow">
        <span className="text-indigo-400 text-lg font-medium select-none">
          Drop here
        </span>
      </div>
    );
  }

  return (
    <Row
      gutter={16}
      align="stretch"
      className={clsx(
        "relative w-full h-24 select-none rounded-xl bg-white shadow",
        id === activeId && "outline outline-indigo-400"
      )}
      onClick={() => setActiveId(id)}
      ref={setNodeRef}
      style={style}
    >
      <Tooltip title="Delete field">
        <Button
          icon={<DeleteOutlined />}
          className="absolute top-4 right-4 z-10 text-red-300 hover:!text-red-500 hover:!bg-red-100"
          type="text"
        />
      </Tooltip>
      <Col
        flex="50px"
        className="flex justify-center items-center text-2xl transition cursor-move text-gray-400 hover:text-indigo-400"
        {...listeners}
      >
        <MdDragIndicator />
      </Col>
      <Col className="py-4" flex="auto">
        <Flex>
          <div className="mr-2 w-6 h-6 flex justify-center items-center bg-indigo-50 text-indigo-400 rounded">
            <SettingOutlined />
          </div>
          <span className="font-medium text-blue-950">{type}</span>
        </Flex>
        <Typography.Title className="mt-4" level={5}>
          Engine type
        </Typography.Title>
      </Col>
    </Row>
  );
};

export default memo(SceneField);
