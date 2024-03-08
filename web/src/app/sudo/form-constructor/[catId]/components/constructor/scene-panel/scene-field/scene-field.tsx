import { Button, Col, Row, Tooltip } from "antd";
import { MdDragIndicator } from "@react-icons/all-files/md/MdDragIndicator";
import { DeleteOutlined } from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SceneField = (props: { id: number }) => {
  const { listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Row
      gutter={16}
      align="stretch"
      className="relative w-full h-24 select-none rounded-xl bg-white shadow"
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
