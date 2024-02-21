import { InputHTMLAttributes } from "react";
import { Option } from "./types";
import { isString } from "lodash";

type Needle = InputHTMLAttributes<HTMLSelectElement>["value"];

export const filterOptions = (needle: Needle, options: Option[]): Option[] => {
  if (!isString(needle)) return options;

  const lcNeedle = needle.toLowerCase();

  return options.filter(
    (option) => option.label.toLowerCase().indexOf(lcNeedle) !== -1
  );
};
