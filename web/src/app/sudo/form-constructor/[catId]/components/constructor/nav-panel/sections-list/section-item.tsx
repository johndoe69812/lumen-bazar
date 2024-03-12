import { FieldsSection } from "@/app/sudo/form-constructor/store/use-sections-store";
import { MdDragIndicator } from "@react-icons/all-files/md/MdDragIndicator";
import { BarsOutlined } from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Col, Row, Typography } from "antd";
import clsx from "clsx";
import { FC, useRef } from "react";

type Props = FieldsSection & {
  onClick: () => void;
  onRename: (newName: string) => void;
  isActive?: boolean;
  fieldsCount?: number;
};

const SectionItem: FC<Props> = (props) => {
  const { isActive, id, title, fieldsCount = 0, onRename, onClick } = props;

  const titleRef = useRef("");
  const { listeners, transform, transition, setNodeRef } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} onClick={onClick}>
      <div
        className={clsx(
          "px-6 py-3 cursor-pointer opacity-80 hover:opacity-100",
          isActive && "!opacity-100 bg-blue-50"
        )}
      >
        <Row align="top">
          <Col
            flex="50px"
            className="flex justify-center items-center text-2xl transition cursor-move"
            {...listeners}
          >
            <MdDragIndicator />
          </Col>
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
      </div>
    </div>
  );
};

export default SectionItem;
