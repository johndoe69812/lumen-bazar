import useSectionsStore from "@/app/sudo/form-constructor/store/use-sections-store";
import { Empty } from "antd";
import { FC } from "react";
import ScenePanel from "./scene-panel";
import useSceneWidgets from "@/app/sudo/form-constructor/store/use-scene-widgets";

const ScenePanelContainer: FC = () => {
  const activeSection = useSectionsStore((state) => state.activeId);

  const fields = useSceneWidgets((state) =>
    activeSection ? state.fields[activeSection] : []
  );

  if (!activeSection) {
    return <Empty description="Please Choose the section from left side" />;
  }

  return <ScenePanel fields={fields} />;
};

export default ScenePanelContainer;
