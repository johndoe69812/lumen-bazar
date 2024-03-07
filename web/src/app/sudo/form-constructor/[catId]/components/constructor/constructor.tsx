"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Col, Form, Row, Segmented } from "antd";
import useSectionsStore from "../../../store/store";
import SectionEditor from "./section-editor";
import SectionsList from "./sections-list";
import { useState } from "react";
import WidgetsList from "./widgets-list";

type Section = "sections" | "widgets";

const Constructor = () => {
  const setSelectedSection = useSectionsStore(
    (state) => state.setSelectedSection
  );

  const [activeSection, setActiveSection] = useState<Section>("sections");

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
      <Row>
        <Col flex="350px" className="shadow border bg-white h-[100vh]">
          <div className="px-6 pt-8 overflow-hidden">
            <Segmented
              options={[
                { label: "Sections", value: "sections" },
                { label: "Widgets", value: "widgets" },
              ]}
              size="large"
              onChange={setActiveSection}
              block
            />
            <div className="mt-8 w-full">
              {activeSection === "sections" && (
                <AnimatePresence>
                  <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    exit={{ x: 300 }}
                  >
                    <SectionsList />
                  </motion.div>
                </AnimatePresence>
              )}
              {activeSection === "widgets" && (
                <AnimatePresence>
                  <motion.div
                    initial={{ x: 300 }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                  >
                    <WidgetsList />
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </Col>
        <Col flex="auto" className="p-8">
          <SectionEditor />
        </Col>
      </Row>
    </Form>
  );
};

export default Constructor;
