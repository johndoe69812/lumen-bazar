import { Button, Col, Row, Tooltip } from "antd";
import { MdDragIndicator } from "@react-icons/all-files/md/MdDragIndicator";
import { DeleteOutlined } from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import clsx from "clsx";

const SceneField = (props: { id: string }) => {
  const { listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id,
    data: {
      type: "sceneWidget",
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [active, setActive] = useState(false);

  if (props.id === "placeholder") {
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
        active && "outline outline-indigo-400"
      )}
      onClick={() => setActive(true)}
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
      <Col flex="auto" className="py-4">
        SceneField
      </Col>
    </Row>
  );
};

export default SceneField;
