import { useAllParams } from "@/app/sudo/shared/queries/use-all-params";
import { Typography } from "antd";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import WidgetSettings from "./widget-settings";
import useSceneWidgets from "@/app/sudo/form-constructor/store/use-scene-widgets";

const SettingsPanel = () => {
  const { catId } = useParams<{ catId: string }>();
  const { data } = useAllParams();

  const widgetType = useSceneWidgets(
    (state) => state.fields.find(({ id }) => id === state.activeId)?.type
  );

  const attributes = useMemo(() => {
    const categoryId = parseInt(catId);
    return data?.filter((p) => p.category[0].id === categoryId);
  }, [data, catId]);

  return (
    <div className="pt-8 px-6">
      <Typography.Title level={4}>Widget settings</Typography.Title>
      {widgetType && <WidgetSettings widgetType={widgetType} />}
    </div>
  );
};

export default SettingsPanel;
