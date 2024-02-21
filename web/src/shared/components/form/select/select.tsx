"use client";

import clsx from "clsx";
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CgSpinner } from "@react-icons/all-files/cg/CgSpinner";
import { filterOptions } from "./utils";
import { Option } from "./types";
import OptionsPopup from "./options-popup";
import { useClickOutside } from "@/shared/hooks/use-click-outside";

type Props = InputHTMLAttributes<HTMLSelectElement> & {
  name: string;
  options: Option[];
  isLoading?: boolean;
  className?: string;
  error?: string;
  touched?: boolean;
  selected?: string;
  relyOnContext?: boolean;
  value?: string;
  onChange?: (value: Option["value"]) => void;
};

type Ref = ForwardedRef<HTMLInputElement>;

const Select = forwardRef((props: Props, ref: Ref) => {
  const {
    options,
    className,
    isLoading = false,
    type,
    error,
    value,
    touched = false,
    relyOnContext = true,
    onChange,
    ...rest
  } = props;

  const [isOpened, setIsOpened] = useState(false);
  const [strValue, setStrValue] = useState("");
  const [selected, setSelected] = useState<Option>();
  const popupRef = useClickOutside(() => setIsOpened(false));

  const handleSelect = useCallback(
    (option: Option) => {
      if (selected?.value !== option.value) {
        setSelected(option);
        onChange?.(option.value);
        setStrValue(option.label);
      } else {
        setSelected(undefined);
        setStrValue("");
      }

      setIsOpened(false);
    },
    [selected, onChange]
  );

  const filteredItems = useMemo(() => {
    return !strValue ? options : filterOptions(strValue, options);
  }, [strValue, options]);

  useEffect(() => {
    const targetOption = options.find((option) => option.value === value);
    setStrValue(targetOption?.label ?? "");
  }, [value, options]);

  const rightIconClassName =
    "absolute right-2 top-0 h-full flex justify-center items-center text-xl";
  const isError = touched && error;

  return (
    <div className="w-full">
      <div
        className={clsx(
          "relative w-full",
          className,
          isError && "border border-red-500"
        )}
      >
        <div>
          <div
            className="w-[200px] p-2 rounded-lg focus-within:text-red bg-stone-200 hover:bg-stone-300"
            onClick={() => setIsOpened(true)}
          >
            <input
              className="bg-transparent"
              value={strValue}
              onInput={(e) => setStrValue(e.currentTarget.value)}
            />
          </div>
          {isOpened && (
            <OptionsPopup
              ref={popupRef}
              options={filteredItems}
              selected={selected}
              onSelect={handleSelect}
            />
          )}
        </div>
        {isLoading && (
          <div className={rightIconClassName}>
            <CgSpinner className="animate-spin" />
          </div>
        )}
      </div>
      {isError && <span className="text-red-600">{error}</span>}
    </div>
  );
});

Select.displayName = "Select";

export default Select;
