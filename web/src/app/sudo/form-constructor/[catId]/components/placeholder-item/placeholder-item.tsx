import { FC } from "react";

const PlaceholderItem: FC = () => {
  return (
    <div className="relative w-full h-24 flex justify-center items-center rounded-lg bg-indigo-100 border-2 border-indigo-400 border-dashed shadow">
      <span className="text-indigo-500 text-lg font-medium select-none">
        Drop here
      </span>
    </div>
  );
};

export default PlaceholderItem;
