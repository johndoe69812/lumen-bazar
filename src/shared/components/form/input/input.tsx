import clsx from "clsx";
import { ForwardedRef, InputHTMLAttributes, forwardRef, useState } from "react";
import { CgSpinner } from "@react-icons/all-files/cg/CgSpinner";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { FaEyeSlash } from "@react-icons/all-files/fa/FaEyeSlash";
import Button from "@/shared/components/button";
import { Field } from "formik";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  isClearable?: boolean;
  isLoading?: boolean;
  inputClassName?: string;
  error?: string;
  touched?: boolean;
};

type Ref = ForwardedRef<HTMLInputElement>;

const Input = forwardRef((props: Props, ref: Ref) => {
  const {
    className,
    isClearable = false,
    inputClassName,
    isLoading = false,
    type,
    error,
    touched = false,
    ...rest
  } = props;

  const [isHidden, setIsHidden] = useState(false);

  const isPassword = type === "password";
  const rightIconClassName =
    "absolute right-2 top-0 h-full flex justify-center items-center text-xl";
  const isError = touched && error;

  return (
    <div className="w-full">
      <div
        className={clsx(
          "relative w-full overflow-hidden",
          className,
          isError && "border !border-red-500"
        )}
      >
        <Field
          ref={ref}
          className={clsx("w-full bg-transparent", inputClassName)}
          type={isPassword ? (isHidden ? "password" : "text") : type}
          {...rest}
        />
        {isPassword && (
          <Button
            className={clsx(
              rightIconClassName,
              "transition px-2 text-gray-700 hover:text-gray-950"
            )}
            title={isHidden ? "Show password" : "Hide password"}
            onClick={() => setIsHidden((p) => !p)}
          >
            {isHidden && <FaEye />}
            {!isHidden && <FaEyeSlash />}
          </Button>
        )}
        {isLoading && (
          <div className={rightIconClassName}>
            <CgSpinner className="animate-spin" />
          </div>
        )}
      </div>
      {isError && <span className="text-red-600">{error}</span>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
