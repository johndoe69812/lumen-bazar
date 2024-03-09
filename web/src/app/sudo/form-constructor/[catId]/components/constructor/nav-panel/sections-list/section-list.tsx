import { PlusOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import SectionItem from "./section-item";

const SectionList = () => {
  return (
    <Form.List name="sections">
      {(fields, { add }) => (
        <div>
          {fields.map(({ key }) => (
            <SectionItem key={key} />
          ))}
          <Button
            icon={<PlusOutlined />}
            onClick={() => add({ title: "New section" })}
          >
            Add section
          </Button>
        </div>
      )}
    </Form.List>
  );
};

export default SectionList;
