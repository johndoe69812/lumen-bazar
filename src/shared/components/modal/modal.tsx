import { MODAL_ROOT } from "@/constants";
import clsx from "clsx";
import { HTMLAttributes, useEffect } from "react";
import { createPortal } from "react-dom";
import preventBodyScroll from "@/shared/utils/prevent-body-scroll";
import enableBodyScroll from "@/shared/utils/enable-body-scroll";

type Props = HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
};

const Modal = (props: Props) => {
  const { children, className, onClose, ...rest } = props;

  useEffect(() => {
    preventBodyScroll();

    return () => {
      enableBodyScroll();
    };
  }, []);

  return createPortal(
    <div
      className={clsx(
        "fixed inset-0 z-10 flex justify-center items-start",
        className
      )}
      {...rest}
    >
      <div
        className="absolute w-full h-full bg-gray-800 opacity-50"
        onClick={() => onClose()}
      />
      {children}
    </div>,
    document.getElementById(MODAL_ROOT)!
  );
};

export default Modal;
