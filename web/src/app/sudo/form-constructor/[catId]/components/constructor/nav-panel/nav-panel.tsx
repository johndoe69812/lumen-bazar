import { motion, AnimatePresence } from "framer-motion";
import { Segmented } from "antd";
import { useState } from "react";
import SectionsList from "./sections-list";
import WidgetsList from "./widgets-list";

type Section = "sections" | "widgets";

const animationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const NavPanel = () => {
  const [activeSection, setActiveSection] = useState<Section>("sections");

  return (
    <div className="pt-8 h-full flex flex-col">
      <div className="px-6">
        <Segmented
          options={[
            { label: "Sections", value: "sections" },
            { label: "Widgets", value: "widgets" },
          ]}
          size="large"
          onChange={setActiveSection}
          block
        />
      </div>
      {activeSection === "sections" && (
        <div className="w-full h-full mt-8 overflow-y-auto">
          <AnimatePresence>
            <motion.div {...animationProps}>
              <SectionsList />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {activeSection === "widgets" && (
        <div className="w-full h-full mt-8">
          <AnimatePresence>
            <motion.div {...animationProps}>
              <WidgetsList />
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default NavPanel;
