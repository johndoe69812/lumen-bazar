import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const SectionList = () => {
  return (
    <Form.List name="sections">
      {(fields, { add }) => (
        <div>
          {fields.map(({ key }, index) => (
            <Form.Item key={key} name={[index, "title"]}>
              <Input
                className="border-0 font-medium focus:ring focus:font-normal"
                onDoubleClick={(e) => (e.target as HTMLInputElement).focus()}
              />
            </Form.Item>
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
