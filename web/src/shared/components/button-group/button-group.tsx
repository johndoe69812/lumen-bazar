import clsx from "clsx";
import {
  FC,
  ForwardedRef,
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from "react";

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;
type Ref = ForwardedRef<HTMLDivElement>;

const ButtonGroup: FC<Props> = forwardRef((props, ref: Ref) => {
  const { children, className, ...rest } = props;

  return (
    <div ref={ref} className={clsx("inline-flex", className)} {...rest}>
      {children}
    </div>
  );
});

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
