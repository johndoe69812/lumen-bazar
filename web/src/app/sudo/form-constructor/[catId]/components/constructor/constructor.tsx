"use client";

import { Col, Form, Row } from "antd";
import NavPanel from "./nav-panel/nav-panel";
import ScenePanel from "./scene-panel";
import { DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import SettingsPanel from "./settings-panel";
import { FC } from "react";

const initialValues = {
  sections: [
    {
      title: "New section",
    },
  ],
};

const Constructor: FC = () => {
  const [form] = Form.useForm();

  const mouseSensor = useSensor(MouseSensor, {
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
            className="h-[calc(100vh_-64px)] top-0 z-10 sticky shadow border bg-white"
            flex="350px"
          >
            <NavPanel />
          </Col>
          <Col flex="auto" className="h-[calc(100vh_-64px)] overflow-hidden">
            <div className="h-full overflow-auto p-8">
              <ScenePanel />
            </div>
            {/* <SectionEditor /> */}
          </Col>
          <Col
            className="h-[calc(100vh_-64px)] top-0 z-10 sticky shadow border bg-white"
            flex="350px"
          >
            <SettingsPanel />
          </Col>
        </Row>
      </DndContext>
    </Form>
  );
};

export default Constructor;
