import clsx from "clsx";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { CgSpinner } from "@react-icons/all-files/cg/CgSpinner";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isClearable?: boolean;
  isLoading?: boolean;
};

type Ref = ForwardedRef<HTMLInputElement>;

const Input = forwardRef((props: Props, ref: Ref) => {
  const { className, isClearable = false, isLoading = false, ...rest } = props;

  return (
    <div className={clsx("relative w-full overflow-hidden", className)}>
      <input ref={ref} className="w-full" {...rest} />
      {isLoading && (
        <div className="absolute right-2 top-0 h-full flex justify-center items-center text-xl">
          <CgSpinner className="animate-spin" />
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
