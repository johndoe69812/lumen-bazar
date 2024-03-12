"use client";

import { ComponentProps, FC, ForwardedRef, forwardRef } from "react";
import { Field } from "formik";
import Input from "./input";

type Props = ComponentProps<typeof Input>;
type Ref = ForwardedRef<HTMLInputElement>;

const InputField: FC<Props> = forwardRef((props, ref: Ref) => {
  const { name, ...rest } = props;

  return (
    <Field name={name} ref={ref}>
      {({ field }: { field: ComponentProps<typeof Input> }) => (
        <Input {...field} {...rest} />
      )}
    </Field>
  );
});

InputField.displayName = "InputField";

export default InputField;
