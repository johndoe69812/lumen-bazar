import { WithChildren } from "@/types/utils";
import clsx from "clsx";
import { HTMLAttributes } from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = WithChildren<
  HTMLAttributes<HTMLHeadElement> & { variant?: Variant }
>;

const variant2ClassName: Record<Variant, string> = {
  h1: "leading-loose text-4xl font-bold",
  h2: "leading-loose text-2xl font-semibold",
  h3: "leading-9 text-lg font-semibold",
  h4: "leading-7 text-lg font-semibold",
  h5: "leading-7 text-lg font-semibold",
  h6: "leading-7 text-lg font-semibold",
};

const Heading = (props: Props) => {
  const { children, className, variant = "h1", ...rest } = props;

  return (
    <h1 className={clsx(variant2ClassName[variant], className)} {...rest}>
      {children}
    </h1>
  );
};

export default Heading;
