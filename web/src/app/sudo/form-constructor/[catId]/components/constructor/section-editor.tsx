import { Card, Form } from "antd";
import { FormValues } from "./types";
import useSectionsStore from "../../../store/store";
import { useEffect, useMemo } from "react";

const SectionEditor = () => {
  const form = Form.useFormInstance();
  const selectedSection = useSectionsStore((state) => state.selectedSection);
  const title = Form.useWatch(["sections", selectedSection, "title"], form);

  console.log("fieldsValue", form.getFieldsValue());

  useEffect(() => {}, [selectedSection]);

  return <Card title={title}></Card>;
};

export default SectionEditor;
