"use client";

import { ComponentProps, FC, ForwardedRef, forwardRef } from "react";
import { useField } from "formik";
import Select from "./select";

type Props = ComponentProps<typeof Select>;
type Ref = ForwardedRef<typeof Select>;

const SelectField: FC<Props> = forwardRef((props, ref: Ref) => {
  const { name, ...rest } = props;

  const [field, , helpers] = useField(name);

  return (
    <Select
      {...rest}
      name={name}
      value={field.value}
      onChange={(newVal) => helpers.setValue(newVal)}
    />
  );
});

SelectField.displayName = "SelectField";

export default SelectField;
