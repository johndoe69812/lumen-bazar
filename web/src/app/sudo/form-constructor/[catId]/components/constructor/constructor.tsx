"use client";

import { Col, Form, Row } from "antd";
import NavPanel from "./nav-panel/nav-panel";
import ScenePanel from "./scene-panel";
import { DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";

const initialValues = {
  sections: [
    {
      title: "New section",
    },
  ],
};

const Constructor = () => {
  const [form] = Form.useForm();

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
      delay: 20,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor);

  return (
    <Form form={form} name="edit" initialValues={initialValues}>
      <DndContext sensors={sensors}>
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
