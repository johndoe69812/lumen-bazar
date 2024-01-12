import clsx from "clsx";
import { HTMLAttributes } from "react";

const Circle = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx("rounded-full shrink-0 w-8 h-8 bg-gray-200", className)}
      {...rest}
    />
  );
};

export default Circle;
