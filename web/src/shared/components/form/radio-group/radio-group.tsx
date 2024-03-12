"use client";

import clsx from "clsx";
import Button from "../../button";
import ButtonGroup from "../../button-group";
import { Option } from "../select/types";
import { FC } from "react";

type Props = {
  options: Option[];
  value?: string;
  as?: "button";
};

const RadioGroup: FC<Props> = (props) => {
  const { options, value } = props;

  return (
    <ButtonGroup className="rounded border border-stone-300">
      {options.map((option, index) => (
        <Button
          key={option.value}
          title={option.tooltip}
          className={clsx(
            "group px-3 leading-8 transition-[width]",
            index !== 0 && "border-l border-stone-300",
            option.value === value && "bg-stone-200"
          )}
        >
          {option.labelCompact && (
            <>
              <span className="block group-hover:hidden">
                {option.labelCompact}
              </span>
              <span className="hidden group-hover:block">{option.label}</span>
            </>
          )}
          {!option.labelCompact && <span>{option.label}</span>}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default RadioGroup;
