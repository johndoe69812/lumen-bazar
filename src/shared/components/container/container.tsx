import clsx from "clsx";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Container = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={clsx("container mx-auto p-0", className)}
      {...rest}
      style={{ maxWidth: 1350 }}
    >
      {children}
    </div>
  );
};

export default Container;
