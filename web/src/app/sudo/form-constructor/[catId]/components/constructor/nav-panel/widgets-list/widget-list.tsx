import { Flex, Input, List, Typography } from "antd";
import { AllWidgets } from "./widgets";
import { SearchOutlined } from "@ant-design/icons";
import WidgetItem from "./widget-item";
import { ChangeEventHandler, useMemo, useState } from "react";

const WidgetList: React.FC = () => {
  const [searchString, setSearchString] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setSearchString(value);
  };

  const filteredItems = useMemo(() => {
    return AllWidgets.filter((widget) => widget.label.includes(searchString));
  }, [searchString]);

  return (
    <Flex vertical className="px-6 max-h-full">
      <Input
        size="large"
        placeholder="Search through widgets"
        className="bg-slate-50"
        classNames={{
          input: "text-gray-400 placeholder:!text-gray-400",
        }}
        suffix={<SearchOutlined className="text-gray-400" />}
        onChange={handleChange}
      />
      <div className="mt-6">
        <Typography.Title className="!text-gray-500" level={5}>
          Basic
        </Typography.Title>
        <List
          grid={{ column: 3, gutter: 16 }}
          dataSource={filteredItems}
          locale={{ emptyText: <div>No widgets found</div> }}
          renderItem={(item) => <WidgetItem {...item} />}
        />
      </div>
    </Flex>
  );
};

export default WidgetList;
