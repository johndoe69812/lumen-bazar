import { Flex, List, Typography } from "antd";
import { Widget } from "./widgets";
import { SettingOutlined } from "@ant-design/icons";
import { DragEventHandler, FC, useCallback } from "react";

const WidgetItem: FC<Widget> = (item) => {
  const handleDragStart: DragEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const id = event.currentTarget.id;
      document.body.classList.add("dragging");
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.setData("text", id);
    },
    []
  );

  const handleDragEnd = useCallback(() => {
    document.body.classList.remove("dragging");
  }, []);

  return (
    <List.Item
      className="relative aspect-square rounded-lg select-none cursor-grab bg-indigo-50 hover:drop-shadow-lg"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable
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
