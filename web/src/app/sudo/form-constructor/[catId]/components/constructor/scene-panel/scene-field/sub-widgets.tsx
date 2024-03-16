import { WidgetField } from "@/app/sudo/form-constructor/store/use-scene-widgets";
import { useSortable } from "@dnd-kit/sortable";
import { FC } from "react";
import PlaceholderItem from "../../../placeholder-item";
import { Flex } from "antd";

type Props = {
  id: string;
  fields?: WidgetField[];
};

const SubWidgets: FC<Props> = (props) => {
  const { id, fields } = props;

  const { listeners, transform, transition, setNodeRef } = useSortable({
    id,
    data: {
      type: "subWidgets",
    },
  });

  return (
    <div className="min-h-8 flex flex-col" ref={setNodeRef}>
      {fields?.map(({ id }) => {
        const isPlaceholder = id === "placeholder";

        return (
          <div key={id}>
            {isPlaceholder && <PlaceholderItem />}
            {!isPlaceholder && <div>{id}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default SubWidgets;
