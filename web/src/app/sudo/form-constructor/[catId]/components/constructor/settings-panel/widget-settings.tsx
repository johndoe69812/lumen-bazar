import { Form, Input, Select } from "antd";
import { WidgetType } from "../widgets-config";
import { useAllParams } from "@/app/sudo/shared/queries/use-all-params";

type Props = {
  widgetType: WidgetType;
};

const WidgetSettings = (props: Props) => {
  const { widgetType } = props;

  const { data } = useAllParams();

  switch (widgetType) {
    case "selectWidget":
      return (
        <Form>
          <Form.Item name="label" label="Label">
            <Input placeholder="SELECT" />
          </Form.Item>
          <Form.Item label="Attribute">
            <Select
              placeholder="Choose attribute"
              options={data}
              fieldNames={{ label: "name", value: "id" }}
            />
          </Form.Item>
        </Form>
      );
    case "checkboxGroup":
      return (
        <Form>
          <Form.Item name="label" label="Label">
            <Input />
          </Form.Item>
          <Form.Item label="Attribute">
            <Select
              placeholder="Choose attribute"
              options={data}
              fieldNames={{ label: "name", value: "id" }}
            />
          </Form.Item>
        </Form>
      );
    default:
      return (
        <Form>
          <Form.Item name="label" label="Label">
            <Input />
          </Form.Item>
          <Form.Item label="Attribute">
            <Select
              placeholder="Choose attribute"
              options={data}
              fieldNames={{ label: "name", value: "id" }}
            />
          </Form.Item>
          <Form.Item label="Regular Expression">
            <Input placeholder="e.g., /cat/" />
          </Form.Item>
        </Form>
      );
  }
};

export default WidgetSettings;
