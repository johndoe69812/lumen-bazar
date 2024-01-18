import { HTMLAttributes } from "react";
import { getFormattedPriceValue } from "./utils";

type Props = HTMLAttributes<HTMLSpanElement> & {
  value: number;
  currency: string;
  unit?: string;
};

const Price = (props: Props) => {
  const { value, currency, unit, ...rest } = props;

  return (
    <span {...rest}>
      {getFormattedPriceValue(value)} {currency} {unit}
    </span>
  );
};

export default Price;
