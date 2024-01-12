import clsx from "clsx";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  const { className, children, ...rest } = props;

  return (
    <button className={clsx("select-none", className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
