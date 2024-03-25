"use client";

import { Col, Form, Row } from "antd";
import NavPanel from "./nav-panel/nav-panel";
import ScenePanel from "./scene-panel";
import {
  DndContext,
  MouseSensor,
  rectIntersection,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import SettingsPanel from "./settings-panel";
import { FC } from "react";

const initialValues = {
  sections: [],
};

const sensorConfig = {
  activationConstraint: {
    distance: 10,
    delay: 20,
    tolerance: 5,
  },
};

const Constructor: FC = () => {
  const [form] = Form.useForm();

  const mouseSensor = useSensor(MouseSensor, sensorConfig);

  const sensors = useSensors(mouseSensor);

  const sidebarClassName =
    "h-[calc(100vh_-64px)] top-0 z-10 sticky shadow border bg-white";

  return (
    <Form form={form} name="edit" initialValues={initialValues}>
      {/* <DndContext collisionDetection={rectIntersection} sensors={sensors}> */}
      <Row>
        <Col
          className={sidebarClassName}
          flex="350px"
          onDragEnd={(event) => console.log("drag ended", event)}
        >
          <NavPanel />
        </Col>
        <Col flex="auto" className="h-[calc(100vh_-64px)] overflow-hidden">
          <div className="h-full overflow-auto p-8">
            <ScenePanel />
          </div>
          {/* <SectionEditor /> */}
        </Col>
        <Col className={sidebarClassName} flex="350px">
          <SettingsPanel />
        </Col>
      </Row>
      {/* </DndContext> */}
    </Form>
  );
};

export default Constructor;
