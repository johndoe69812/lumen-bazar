import { useAllOptions } from "@/app/sudo/shared/queries/use-all-options";
import { Checkbox, Form, InputNumber, Select } from "antd";
import { normalizeOptions } from "./utils/normalize-options";
import { useMemo } from "react";

type Props = { dataType: "options" | "string" | "number" };

const ParamSettings = (props: Props) => {
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

const OptionsConstraints = () => {
  const { data: allOptions } = useAllOptions();

  const options = useMemo(() => normalizeOptions(allOptions), [allOptions]);

  return (
    <>
      <Form.Item name="optionId">
        <Select options={options} showSearch />
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
