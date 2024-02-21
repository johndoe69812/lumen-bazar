import clsx from "clsx";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Container = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={clsx("container mx-auto p-0 xl:w-[1350]", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
