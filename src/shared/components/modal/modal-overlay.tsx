import { MODAL_ROOT } from "@/constants";
import clsx from "clsx";
import { HTMLAttributes, useEffect } from "react";
import { createPortal } from "react-dom";
import preventBodyScroll from "@/shared/utils/prevent-body-scroll";
import enableBodyScroll from "@/shared/utils/enable-body-scroll";

type Props = HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
};

const ModalOverlay = (props: Props) => {
  const { children, className, onClose, ...rest } = props;

  useEffect(() => {
    preventBodyScroll();

    return () => {
      enableBodyScroll();
    };
  }, []);

  return createPortal(
    <div
      className={clsx("fixed inset-0 z-10 flex justify-center", className)}
      {...rest}
    >
      <div
        className="absolute z-0 inset-0 opacity-50 bg-gray-800"
        onClick={() => onClose()}
      />
      {children}
    </div>,
    document.getElementById(MODAL_ROOT)!
  );
};

export default ModalOverlay;
