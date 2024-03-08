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
    <div className="px-6 pt-8">
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
            <motion.div {...animationProps}>
              <SectionsList />
            </motion.div>
          </AnimatePresence>
        )}
        {activeSection === "widgets" && (
          <AnimatePresence>
            <motion.div {...animationProps}>
              <WidgetsList />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default NavPanel;
