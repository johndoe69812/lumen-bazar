import clsx from "clsx";
import { HTMLAttributes, ReactNode, useRef } from "react";
import { SIZE_TO_CLASS_NAME } from "./constants";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Button from "@/shared/components/button";

type Props = HTMLAttributes<HTMLDialogElement> & {
  size?: "sm" | "md" | "lg";
  title?: ReactNode;
  onClose: () => void;
};

const ModalWindow = (props: Props) => {
  const { children, className, title, size = "md", onClose, ...rest } = props;

  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <dialog
      open
      className={clsx(
        "relative animate-fadeIn rounded-xl bg-white",
        SIZE_TO_CLASS_NAME[size],
        className
      )}
      ref={modalRef}
      {...rest}
    >
      {title && <h2>{title}</h2>}
      {children}
      <Button
        className="absolute -right-2 top-0 p-2 text-4xl rounded-full translate-x-full transition text-white hover:bg-gray-500"
        title="Close modal"
        onClick={onClose}
      >
        <MdClose />
      </Button>
    </dialog>
  );
};

export default ModalWindow;
