"use client";

import { Col, Form, Row } from "antd";
import NavPanel from "./nav-panel/nav-panel";
import ScenePanel from "./scene-panel";

import DndContext from "./dnd-context";

const initialValues = {
  sections: [
    {
      title: "New section",
    },
  ],
};

const Constructor = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} name="edit" initialValues={initialValues}>
      <DndContext>
        <Row>
          <Col
            flex="350px"
            className="h-[100vh] top-0 z-10 sticky shadow border bg-white"
          >
            <NavPanel />
          </Col>
          <Col flex="auto">
            {/* <Flex align="center" className="px-8 py-4 bg-white shadow">
              <Typography.Title style={{ margin: 0 }} level={3}>
                Section name
              </Typography.Title>
            </Flex> */}
            <div className="h-full p-8">
              <ScenePanel />
            </div>
            {/* <SectionEditor /> */}
          </Col>
        </Row>
      </DndContext>
    </Form>
  );
};

export default Constructor;
