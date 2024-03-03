import { ParamOptionSchema } from "@/api";

export const normalizeOptions = (optionItems?: ParamOptionSchema[]) => {
  return (optionItems ?? []).map(({ id, name }) => ({
    label: name,
    value: id,
  }));
};
