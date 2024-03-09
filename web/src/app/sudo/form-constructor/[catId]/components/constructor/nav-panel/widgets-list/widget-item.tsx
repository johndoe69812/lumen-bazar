import { Flex, List, Typography } from "antd";
import { Widget } from "./widgets";
import { SettingOutlined } from "@ant-design/icons";
import { useDraggable } from "@dnd-kit/core";
import clsx from "clsx";

const getTransformStyle = ({ x, y }: { x: number; y: number }) => ({
  transform: `translate3d(${x}px, ${y}px, 0)`,
});

const WidgetItem = (item: Widget) => {
  const { attributes, listeners, transform, isDragging, setNodeRef } =
    useDraggable({
      id: item.id.toString(),
    });

  const style = transform ? getTransformStyle(transform) : undefined;

  return (
    <List.Item
      className={clsx(
        "relative aspect-square rounded-lg select-none cursor-grab bg-indigo-50 hover:drop-shadow-lg",
        isDragging && "z-10 border !cursor-grabbing"
      )}
      id={item.id.toString()}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <Flex
        vertical
        gap={16}
        justify="center"
        align="center"
        className="w-full h-full"
      >
        <span
          style={{ fontSize: 24, marginTop: 10, height: 30 }}
          className="text-indigo-400"
        >
          {item.icon ?? <SettingOutlined />}
        </span>

        <Typography.Text className="font-medium text-slate-800">
          {item.label}
        </Typography.Text>
      </Flex>
    </List.Item>
  );
};

export default WidgetItem;
