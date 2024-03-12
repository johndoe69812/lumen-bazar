"use client";

import clsx from "clsx";
import {
  FC,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CgSpinner } from "@react-icons/all-files/cg/CgSpinner";
import { GoChevronDown } from "@react-icons/all-files/go/GoChevronDown";
import { GoChevronUp } from "@react-icons/all-files/go/GoChevronUp";
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";
import { filterOptions } from "./utils";
import { Option } from "./types";
import OptionsPopup from "./options-popup";
import { useClickOutside } from "@/shared/hooks/use-click-outside";

type Props = InputHTMLAttributes<HTMLSelectElement> & {
  name: string;
  options: Option[];
  isClearable?: boolean;
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

const Select: FC<Props> = forwardRef((props: Props, ref: Ref) => {
  const {
    options,
    className,
    isLoading = false,
    error,
    value,
    isClearable = false,
    touched = false,
    onChange,
  } = props;

  const [isOpened, setIsOpened] = useState(false);
  const [strValue, setStrValue] = useState("");
  const [selected, setSelected] = useState<Option>();
  const popupRef = useClickOutside(() => setIsOpened(false));
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearValue = useCallback(() => {
    setSelected(undefined);
    setStrValue("");
  }, []);

  const handleSelect = useCallback(
    (option: Option) => {
      if (selected?.value !== option.value) {
        setSelected(option);
        onChange?.(option.value);
        setStrValue(option.label);
      } else {
        handleClearValue();
      }

      setIsOpened(false);
    },
    [selected, onChange, handleClearValue]
  );

  const filteredItems = useMemo(() => {
    return !strValue ? options : filterOptions(strValue, options);
  }, [strValue, options]);

  useEffect(() => {
    const targetOption = options.find((option) => option.value === value);
    setStrValue(targetOption?.label ?? "");
  }, [value, options]);

  const rightIconClassName =
    "absolute right-2 top-0 h-full flex justify-center items-center text-md";
  const isError = touched && error;
  const showClearIcon = isClearable && strValue;

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
            className="relative w-[200px] px-2 py-1 rounded-lg focus-within:ring bg-stone-200 hover:bg-stone-300"
            onFocus={() => setIsOpened(true)}
            onClick={() => inputRef.current?.focus()}
            onBlur={() => setTimeout(() => setIsOpened(false), 100)}
          >
            <input
              className="bg-transparent"
              value={strValue}
              ref={inputRef}
              onInput={(e) => setStrValue(e.currentTarget.value)}
            />

            <div className={rightIconClassName}>
              {isLoading && <CgSpinner className="animate-spin" />}
              {showClearIcon && (
                <IoCloseOutline
                  className="cursor-pointer"
                  onClick={handleClearValue}
                />
              )}
              {!showClearIcon && !isOpened && <GoChevronDown />}
              {!showClearIcon && isOpened && <GoChevronUp />}
            </div>
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
      </div>
      {isError && <span className="text-red-600">{error}</span>}
    </div>
  );
});

Select.displayName = "Select";

export default Select;
