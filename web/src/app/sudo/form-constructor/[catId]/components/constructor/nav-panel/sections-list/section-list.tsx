import { PlusOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import SectionItem from "./section-item";
import useSectionsStore from "@/app/sudo/form-constructor/store/sections";

const SectionList = () => {
  const { selectedSection, setSelectedSection } = useSectionsStore();

  return (
    <div className="h-full">
      <Form.List name="sections">
        {(fields, { add }) => (
          <div>
            {fields.map(({ key }, index) => (
              <SectionItem
                key={key}
                isActive={key === selectedSection}
                onClick={() => setSelectedSection(key)}
              />
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
    </div>
  );
};

export default SectionList;
