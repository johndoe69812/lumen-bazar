"use client";

import { ComponentProps, ForwardedRef, forwardRef } from "react";
import { Field, FieldAttributes, useField } from "formik";
import Input from "./input";

type Props = ComponentProps<typeof Input>;
type Ref = ForwardedRef<HTMLInputElement>;

const InputField = forwardRef((props: Props, ref: Ref) => {
  const { name, ...rest } = props;

  return (
    <Field name={name}>{({ field }) => <Input {...field} {...rest} />}</Field>
  );
});

InputField.displayName = "InputField";

export default InputField;
