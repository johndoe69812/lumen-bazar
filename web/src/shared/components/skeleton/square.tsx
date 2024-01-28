import clsx from "clsx";
import { HTMLAttributes } from "react";

const Square = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx("rounded-lg h-6 w-1/2 bg-gray-200", className)}
      {...rest}
    />
  );
};

export default Square;
