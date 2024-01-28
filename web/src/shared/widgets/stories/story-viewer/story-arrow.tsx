import { IoChevronBack } from "@react-icons/all-files/io5/IoChevronBack";
import { IoChevronForward } from "@react-icons/all-files/io5/IoChevronForward";
import clsx from "clsx";

type Props = {
  dir: "prev" | "next";
  onClick: () => void;
};

const StoryArrow = (props: Props) => {
  const { dir, onClick } = props;

  const isPrev = dir === "prev";
  const title = isPrev ? "Show previous story" : "Show next story";
  const nextClassName = "right-0 translate-x-12";
  const prevClassName = "-translate-x-12";

  return (
    <button
      className={clsx(
        "absolute text-4xl h-full top-0",
        isPrev ? prevClassName : nextClassName
      )}
      title={title}
      onClick={onClick}
    >
      <div className="transition text-white hover:scale-[120%]">
        {dir === "prev" ? <IoChevronBack /> : <IoChevronForward />}
      </div>
    </button>
  );
};

export default StoryArrow;
