import { useEffect, useRef } from "react";

const useResetFormOnCloseModal = ({
  form,
  open,
}: {
  form: any;
  open: boolean;
}) => {
  const prevOpenRef = useRef<boolean>();

  useEffect(() => {
    prevOpenRef.current = open;
  }, [open]);
  const prevOpen = prevOpenRef.current;

  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [form, prevOpen, open]);
};

export default useResetFormOnCloseModal;
