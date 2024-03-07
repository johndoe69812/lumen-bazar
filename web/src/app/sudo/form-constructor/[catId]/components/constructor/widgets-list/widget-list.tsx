import { Flex, List, Typography } from "antd";
import { AllWidgets } from "./widgets";
import { SettingOutlined } from "@ant-design/icons";

const WidgetList = () => {
  return (
    <List
      grid={{ column: 3, gutter: 16 }}
      dataSource={AllWidgets}
      renderItem={(item) => (
        <List.Item
          draggable
          className="aspect-square rounded-lg transition select-none cursor-grab bg-indigo-100/40 hover:drop-shadow-lg"
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
      )}
    />
  );
};

export default WidgetList;
