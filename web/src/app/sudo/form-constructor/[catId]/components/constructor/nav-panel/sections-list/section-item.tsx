import { FieldsSection } from "@/app/sudo/form-constructor/store/use-sections-store";
import { MdDragIndicator } from "@react-icons/all-files/md/MdDragIndicator";
import { BarsOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Button,
  Col,
  Divider,
  Flex,
  Popconfirm,
  Row,
  Tooltip,
  Typography,
} from "antd";
import clsx from "clsx";
import { FC, useRef } from "react";

type Props = FieldsSection & {
  onClick: () => void;
  onRename: (newName: string) => void;
  onDelete: () => void;
  isActive?: boolean;
  fieldsCount?: number;
};

const SectionItem: FC<Props> = (props) => {
  const {
    isActive,
    id,
    title,
    fieldsCount = 0,
    onDelete,
    onRename,
    onClick,
  } = props;

  const titleRef = useRef("");
  const { listeners, transform, transition, setNodeRef } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="relative group select-none"
      ref={setNodeRef}
      style={style}
      onClick={onClick}
    >
      <div
        className={clsx(
          "px-6 py-3 cursor-pointer opacity-80 hover:opacity-100",
          isActive && "!opacity-100 bg-blue-50"
        )}
      >
        <Row align="top" gutter={16}>
          <Col
            flex="25px"
            className="flex justify-center items-center self-center text-lg transition cursor-move"
            {...listeners}
          >
            <MdDragIndicator />
          </Col>
          <Divider
            className="self-center"
            type="vertical"
            orientation="center"
          />
          <Col flex="25px" className="mt-[-1px] text-lg">
            <BarsOutlined />
          </Col>
          <Col>
            <Typography.Title
              className="!mb-0"
              style={{ maxWidth: 150 }}
              level={5}
              editable={{
                autoSize: true,
                icon: null,
                maxLength: 100,
                triggerType: ["text"],
                onChange: (value) => {
                  titleRef.current = value;
                },
                onEnd: () => onRename(titleRef.current),
              }}
            >
              {title}
            </Typography.Title>
            <Typography.Text>{fieldsCount} fields</Typography.Text>
          </Col>
        </Row>
        <Flex className="absolute right-6 top-0 h-full" align="center">
          <Popconfirm
            title="Are you sure you want to delete this section?"
            onConfirm={onDelete}
          >
            <Tooltip title="Delete this section">
              <Button
                className="transition opacity-0 group-hover:opacity-100 focus:opacity-100"
                size="small"
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </Popconfirm>
        </Flex>
      </div>
    </div>
  );
};

export default SectionItem;
