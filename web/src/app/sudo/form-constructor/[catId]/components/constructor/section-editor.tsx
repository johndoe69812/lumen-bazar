import { Button, Card, Form, Input, Select } from "antd";
import { FormValues } from "./types";
import useSectionsStore from "../../../store/store";
import { useCallback, useEffect, useMemo } from "react";
import { useAllParams } from "@/app/sudo/shared/queries/use-all-params";
import { OptionProps } from "antd/es/select";

const WidgetTypes = {
  select: "",
  checkbox: "",
};

const SectionEditor = () => {
  const form = Form.useFormInstance();
  const selectedSection = useSectionsStore((state) => state.selectedSection);
  const title = Form.useWatch(["sections", selectedSection, "title"], form);

  const { data: attributes } = useAllParams();

  const handleAddNewWidget = useCallback(() => {
    alert("ADDED");
  }, []);

  useEffect(() => {}, [selectedSection]);

  return (
    <Card title={title}>
      <Input placeholder="Label" />
      <Select
        placeholder="Attribute"
        popupMatchSelectWidth={false}
        fieldNames={{ value: "id", label: "name" }}
        options={attributes}
      />
      <Input placeholder="Widget" />
      <Button onClick={handleAddNewWidget}>Add Widget</Button>
    </Card>
  );
};

export default SectionEditor;
