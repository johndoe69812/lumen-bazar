import { FaCheck } from "@react-icons/all-files/fa/FaCheck";

import { Option } from "./types";
import { ForwardedRef, forwardRef } from "react";

type Props = {
  options: Option[];
  onSelect: (option: Option) => void;
  selected?: Option;
};

const OptionsPopup = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const { options, selected, onSelect } = props;

    return (
      <div
        ref={ref}
        className="absolute w-[200px] max-h-[200px] z-10 overflow-auto mt-2 py-2 rounded-lg shadow-slate-200 shadow-[0_0_2px_1px] bg-white animate-fadeIn"
      >
        {options.length === 0 && <div className="p-2">Nothing found</div>}
        {options.length > 0 &&
          options.map((option) => (
            <div
              className="p-2 cursor-pointer flex justify-between items-center hover:bg-slate-100"
              key={option.value}
              onClick={() => onSelect(option)}
            >
              {option.label}
              {selected?.value === option.value && (
                <span className="mr-2 text-sm text-gray-500">
                  <FaCheck />
                </span>
              )}
            </div>
          ))}
      </div>
    );
  }
);

OptionsPopup.displayName = "OptionsPopup";

export default OptionsPopup;
