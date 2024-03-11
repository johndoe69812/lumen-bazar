import { PlusOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import SectionItem from "./section-item";
import useSectionsStore from "@/app/sudo/form-constructor/store/use-sections-store";
import useSceneWidgets from "@/app/sudo/form-constructor/store/use-scene-widgets";

const SectionList = () => {
  const { activeId, setActiveId } = useSectionsStore();
  const { setActiveSectionId } = useSceneWidgets();

  return (
    <div className="h-full">
      <Form.List name="sections">
        {(fields, { add }) => (
          <div>
            {fields.map(({ key }) => (
              <SectionItem
                key={key}
                isActive={key === activeId}
                onClick={() => {
                  setActiveId(key);
                  setActiveSectionId(key);
                }}
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
