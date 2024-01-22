import clsx from "clsx";
import { HTMLAttributes } from "react";
import { SIZE_TO_CLASS_NAME } from "./constants";

type Props = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
};

const ModalWindow = (props: Props) => {
  const { children, className, size = "md", ...rest } = props;

  return (
    <div
      className={clsx(
        "relative w-1/3 rounded-lg bg-white",
        SIZE_TO_CLASS_NAME[size],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ModalWindow;
