import { Flex, List, Typography } from "antd";
import { AllWidgets, Widget } from "./widgets";
import { SettingOutlined } from "@ant-design/icons";
import { useDraggable } from "@dnd-kit/core";
import clsx from "clsx";

const WidgetListItem = (item: Widget) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: item.id.toString(),
    });

  const style = transform
    ? {
        zIndex: 9999,
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <List.Item
      className={clsx(
        "aspect-square rounded-lg select-none cursor-grab bg-indigo-50 hover:drop-shadow-lg",
        isDragging && "border z-100"
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

const WidgetList = () => {
  return (
    <List
      grid={{ column: 3, gutter: 16 }}
      dataSource={AllWidgets}
      renderItem={(item) => <WidgetListItem {...item} />}
    />
  );
};

export default WidgetList;
