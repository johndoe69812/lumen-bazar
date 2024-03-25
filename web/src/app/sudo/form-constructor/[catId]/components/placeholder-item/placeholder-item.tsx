import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const PlaceholderItem: FC<Props> = (props) => {
  const { className, ...rest } = props;

  return (
    <div
      className={clsx(
        "placeholder relative transition-[height] w-full h-8 opacity-0 flex justify-center items-center rounded-lg bg-indigo-100 border-2 border-indigo-400 border-dashed shadow",
        className === "active" && "h-24 opacity-100"
      )}
      {...rest}
    >
      <span className="text-indigo-500 text-lg font-medium select-none">
        Drop here
      </span>
    </div>
  );
};

export default PlaceholderItem;
