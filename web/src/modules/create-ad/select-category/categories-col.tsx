import { AdCategorySchema } from "@/api";
import clsx from "clsx";

type Props = {
  title: string;
  list: AdCategorySchema[];
  onClick: (alias: string) => void;
  active?: string;
};

const CategoriesCol = (props: Props) => {
  const { title, list, active, onClick } = props;

  return (
    <div className="h-full w-60 py-2 border-r overflow-auto max-h-[400px]">
      <div className="px-2 py-1 mb-1 text-gray-500">{title}</div>
      {list.map((cat) => (
        <div
          key={cat.alias}
          className={clsx(
            "px-2 py-1 leading-5 cursor-pointer hover:text-white hover:bg-blue-400",
            active === cat.alias && "bg-blue-500 text-white"
          )}
          onClick={() => onClick(cat.alias)}
        >
          {cat.title}
        </div>
      ))}
    </div>
  );
};

export default CategoriesCol;
