"use client";

import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row } from "antd";
import useSectionsStore from "../../../store/store";
import SectionEditor from "./section-editor";

const Constructor = () => {
  const setSelectedSection = useSectionsStore(
    (state) => state.setSelectedSection
  );

  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="edit"
      initialValues={{
        sections: [
          {
            title: "New section",
          },
        ],
      }}
    >
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Sections" bordered>
            <Form.List name="sections">
              {(fields, { add }) => (
                <div>
                  {fields.map(({ key }, index) => (
                    <Form.Item key={key} name={[index, "title"]}>
                      <Input
                        className="border-0 font-medium focus:ring focus:font-normal"
                        onClick={() => {
                          setSelectedSection(index);
                        }}
                        onDoubleClick={(e) =>
                          (e.target as HTMLInputElement).focus()
                        }
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
          </Card>
        </Col>
        <Col span={18}>
          <SectionEditor />
        </Col>
      </Row>
    </Form>
  );
};

export default Constructor;
