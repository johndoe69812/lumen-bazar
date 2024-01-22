import clsx from "clsx";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

const Button = (props: Props) => {
  const { className, isLoading, children, ...rest } = props;

  return (
    <button
      className={clsx(
        "select-none focus-visible:ring",
        className,
        isLoading && "pointer-events-none opacity-80"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
