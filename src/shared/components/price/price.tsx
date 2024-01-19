import { HTMLAttributes } from "react";
import { getFormattedPriceValue } from "./utils";
import { Price } from "@/types";

type Props = HTMLAttributes<HTMLSpanElement> & Price;

const Price = (props: Props) => {
  const { value, currency, unit, ...rest } = props;

  return (
    <span {...rest}>
      {getFormattedPriceValue(value)}
      <span title={currency.title}>{currency.sign}</span> {unit}
    </span>
  );
};

export default Price;
