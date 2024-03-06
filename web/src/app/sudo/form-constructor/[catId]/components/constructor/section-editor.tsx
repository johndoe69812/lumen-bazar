import { Button, Card, Flex, Form, Input, List, Select } from "antd";
import { FormValues } from "./types";
import useSectionsStore from "../../../store/store";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAllParams } from "@/app/sudo/shared/queries/use-all-params";
import { OptionProps } from "antd/es/select";

const WidgetTypes = {
  select: "",
  checkbox: "",
};

type Widget = {
  title: string;
};

const SectionEditor = () => {
  const form = Form.useFormInstance();
  const selectedSection = useSectionsStore((state) => state.selectedSection);
  const title = Form.useWatch(["sections", selectedSection, "title"], form);

  const [widgets, setWidgets] = useState<Widget[]>([]);

  const { data: attributes } = useAllParams();

  const handleAddNewWidget = useCallback(() => {
    setWidgets((prev) => [...prev, { title: "New Widget" }]);
  }, []);

  return (
    <Flex vertical gap={16}>
      <Card className="shadow border">
        <Input placeholder="Category title" />
      </Card>
      <Flex vertical gap={8}>
        <List
          dataSource={widgets}
          renderItem={(item) => (
            <Card className="shadow border mb-2">
              <Form.Item label="Widget type">
                <Select
                  options={[
                    { label: "Select", value: "select" },
                    { label: "Group", value: "group" },
                  ]}
                />
              </Form.Item>

              <Form.Item label="Title">
                <Input />
              </Form.Item>
            </Card>
          )}
        />
        <Button
          type="dashed"
          size="large"
          style={{ fontWeight: 500 }}
          onClick={handleAddNewWidget}
        >
          Add new widget
        </Button>
        {/* <Input placeholder="Label" />
      <Select
        placeholder="Attribute"
        popupMatchSelectWidth={false}
        fieldNames={{ value: "id", label: "name" }}
        options={attributes}
      />
      <Select
        placeholder="Widget"
        options={[{ label: "select", value: "select" }]}
      />
      <Button onClick={handleAddNewWidget}>Add Widget</Button> */}
      </Flex>
    </Flex>
  );
};

export default SectionEditor;
