import { Col, Flex, Row, Typography } from "antd";
import { MdDragIndicator } from "@react-icons/all-files/md/MdDragIndicator";
import { SettingOutlined } from "@ant-design/icons";
import { FC, memo } from "react";
import clsx from "clsx";
import { WidgetType } from "../../widgets-config";
import useSceneWidgets, {
  WidgetField,
} from "@/app/sudo/form-constructor/store/use-scene-widgets";
import FieldActions from "./field-actions";
import SubWidgets from "./sub-widgets";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  type: WidgetType | "placeholder";
  onClone: () => void;
  onDelete: () => void;
  fields?: WidgetField[];
};

const SceneField: FC<Props> = (props) => {
  const { id, type, fields, onClone, onDelete } = props;

  const isGroup = true;
  const { listeners, transform, transition, setNodeRef } = useSortable({ id });

  const [activeId, setActiveId] = useSceneWidgets((state) => [
    state.activeId,
    state.setActiveId,
  ]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Flex gap={16} ref={setNodeRef} style={style} vertical>
      <Row
        gutter={16}
        align="stretch"
        className={clsx(
          "relative w-full m-0 min-h-24 h-auto select-none rounded-xl bg-white shadow",
          id === activeId && "outline outline-indigo-400"
        )}
        onClick={() => setActiveId(id)}
      >
        <FieldActions onClone={onClone} onDelete={onDelete} />
        <Col
          flex="50px"
          className="drag-handler flex justify-center items-center text-2xl transition cursor-move text-gray-400 hover:text-indigo-400"
          {...listeners}
        >
          <MdDragIndicator />
        </Col>
        <Col className="content py-4" flex="auto">
          <Flex className="field-type">
            <div className="mr-2 w-6 h-6 flex justify-center items-center bg-indigo-50 text-indigo-400 rounded">
              <SettingOutlined />
            </div>
            <span className="font-medium text-blue-950">{type}</span>
          </Flex>
          <Flex vertical gap={16}>
            <Typography.Title className="field-title mt-4" level={5}>
              Field label
            </Typography.Title>
            {isGroup && <SubWidgets fieldId={id} />}
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};

export default memo(SceneField);
