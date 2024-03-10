import { useAllParams } from "@/app/sudo/shared/queries/use-all-params";
import { Form, Input, Select } from "antd";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const SettingsPanel = () => {
  const { catId } = useParams<{ catId: string }>();
  const { data } = useAllParams();

  const attributes = useMemo(() => {
    const categoryId = parseInt(catId);
    return data?.filter((p) => p.category[0].id === categoryId);
  }, [data, catId]);

  return (
    <div className="pt-8 px-6">
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
    </div>
  );
};

export default SettingsPanel;
