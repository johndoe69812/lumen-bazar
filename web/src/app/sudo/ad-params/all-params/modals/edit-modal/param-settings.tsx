import { useAllOptions } from "@/app/sudo/shared/queries/use-all-options";
import { Checkbox, Form, InputNumber, Select } from "antd";
import { FC } from "react";

type Props = { dataType: "options" | "string" | "number" };

const ParamSettings: FC<Props> = (props) => {
  const { dataType } = props;

  switch (dataType) {
    case "number":
      return <NumberConstraints />;

    case "options":
      return <OptionsConstraints />;

    default:
      return null;
  }
};

const OptionsConstraints: FC = () => {
  const { data: allOptions } = useAllOptions();

  return (
    <>
      <Form.Item name="optionId">
        <Select
          fieldNames={{ label: "name", value: "id" }}
          options={allOptions}
          showSearch
        />
      </Form.Item>
      <Form.Item
        tooltip="Can customer choose multiple options? I.e laptopType: for office, for game"
        name={["meta", "isMultiple"]}
        valuePropName="checked"
      >
        <Checkbox>Multiple options</Checkbox>
      </Form.Item>
    </>
  );
};

const NumberConstraints = () => {
  return (
    <>
      <Form.Item name={["meta", "min"]}>
        <InputNumber
          placeholder="Minimum"
          min={0}
          max={Number.MAX_SAFE_INTEGER}
        />
      </Form.Item>
      <Form.Item name={["meta", "max"]}>
        <InputNumber
          placeholder="Maximum"
          min={0}
          maxLength={Number.MAX_SAFE_INTEGER}
        />
      </Form.Item>
    </>
  );
};

export default ParamSettings;
