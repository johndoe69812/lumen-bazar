import clsx from "clsx";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  thumbImage: string;
  isViewed: boolean;
};

const StoryThumb = (props: Props) => {
  const { title, thumbImage, isViewed = false, className, ...rest } = props;

  return (
    <div
      className={clsx(
        "group flex flex-col items-center transition cursor-pointer",
        className
      )}
      {...rest}
    >
      <div
        className={clsx(
          "w-24 h-24 rounded-full select-none",
          !isViewed && "ring-2 ring-red-400"
        )}
      >
        <div className="w-[95%] h-[95%] m-[2.5%] overflow-hidden rounded-full bg-blue-100">
          <img src={thumbImage} alt={title} />
        </div>
      </div>
      <div className="mt-2 text-sm group-hover:text-red-500 cursor-pointer">
        {title}
      </div>
    </div>
  );
};

export default StoryThumb;
