import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import { FC } from "react";

type Props = {
  onClone: () => void;
  onDelete: () => void;
};

const FieldActions: FC<Props> = (props) => {
  const { onClone, onDelete } = props;

  return (
    <Flex className="absolute top-4 right-4 z-10">
      <Tooltip title="Clone this field">
        <Button
          className="text-slate-400 hover:!text-slate-500 hover:!bg-slate-200"
          type="text"
          icon={<CopyOutlined />}
          onClick={() => onClone()}
        />
      </Tooltip>
      <Tooltip title="Delete this field">
        <Button
          className="text-red-300 hover:!text-red-500 hover:!bg-red-100"
          type="text"
          icon={<DeleteOutlined />}
          onClick={() => onDelete()}
        />
      </Tooltip>
    </Flex>
  );
};

export default FieldActions;
