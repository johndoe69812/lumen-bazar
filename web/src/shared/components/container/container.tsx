import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Container: FC<Props> = (props) => {
  const { children, className, ...rest } = props;

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
