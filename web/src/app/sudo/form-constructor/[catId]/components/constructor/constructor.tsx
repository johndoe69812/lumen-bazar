"use client";

import { Col, Flex, Form, Row, Typography } from "antd";
import useSectionsStore from "../../../store/sections";
import SectionEditor from "./section-editor";
import NavPanel from "./nav-panel/nav-panel";
import ScenePanel from "./scene-panel";
import { DndContext } from "@dnd-kit/core";
import { useCallback } from "react";
import useFieldsState from "../../../store/fields";

const Constructor = () => {
  const createField = useFieldsState((state) => state.create);

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
      <DndContext onDragEnd={() => createField({ id: Math.random() })}>
        <Row>
          <Col
            flex="350px"
            className="h-[100vh] top-0 sticky shadow border bg-white"
          >
            <NavPanel />
          </Col>
          <Col flex="auto">
            <Flex align="center" className="px-8 py-4 bg-white shadow">
              <Typography.Title style={{ margin: 0 }} level={3}>
                Section name
              </Typography.Title>
            </Flex>
            <div className="p-8">
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
