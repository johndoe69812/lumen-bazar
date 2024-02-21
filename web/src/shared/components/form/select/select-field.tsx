"use client";

import { ComponentProps, ForwardedRef, forwardRef } from "react";
import { Field, FieldAttributes, useField } from "formik";
import Select from "./select";

type Props = ComponentProps<typeof Select>;
type Ref = ForwardedRef<HTMLInputElement>;

const SelectField = forwardRef((props: Props, ref: Ref) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <Select
      {...props}
      value={field.value}
      onChange={(newVal) => helpers.setValue(newVal)}
    />
  );
});

SelectField.displayName = "SelectField";

export default SelectField;
