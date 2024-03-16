import { Button, Col, Flex, Row, Tooltip, Typography } from "antd";
import { MdDragIndicator } from "@react-icons/all-files/md/MdDragIndicator";
import {
  CopyOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FC, memo } from "react";
import clsx from "clsx";
import { WidgetType } from "../../widgets-config";
import useSceneWidgets, {
  WidgetField,
} from "@/app/sudo/form-constructor/store/use-scene-widgets";
import FieldActions from "./field-actions";
import SubWidgets from "./sub-widgets";
import PlaceholderItem from "../../../placeholder-item";

type Props = {
  id: string;
  type: WidgetType | "placeholder";
  onClone: () => void;
  onDelete: () => void;
  children?: WidgetField[];
};

const SceneField: FC<Props> = (props) => {
  const { id, type, children, onClone, onDelete } = props;

  const { listeners, transform, transition, setNodeRef } = useSortable({
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
    return <PlaceholderItem />;
  }

  return (
    <Row
      gutter={16}
      align="stretch"
      className={clsx(
        "relative w-full min-h-24 h-auto select-none rounded-xl bg-white shadow",
        id === activeId && "outline outline-indigo-400"
      )}
      onClick={() => setActiveId(id)}
      ref={setNodeRef}
      style={style}
    >
      <FieldActions onClone={onClone} onDelete={onDelete} />
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
        <Flex vertical gap={16}>
          <Typography.Title className="mt-4" level={5}>
            Field label
          </Typography.Title>
          <SubWidgets fields={children} id={`${id}.children`} />
        </Flex>
      </Col>
    </Row>
  );
};

export default memo(SceneField);
