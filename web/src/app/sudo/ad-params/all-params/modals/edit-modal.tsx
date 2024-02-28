import { Option } from "@/shared/components/form/select/types";
import useAllCategories from "@/shared/hooks/use-all-categories";
import { Form, Input, Modal, Select } from "antd";
import { useEffect, useMemo, useRef } from "react";
import { useAllParams } from "../use-all-params";

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

interface Props {
  open: boolean;
  onCancel: () => void;
  id?: number;
}

const EditModal: React.FC<Props> = (props: Props) => {
  const { id, open, onCancel } = props;

  console.log("id", id);

  const { data } = useAllParams();

  const [form] = Form.useForm();
  const { allCategories } = useAllCategories(false, true);

  useResetFormOnCloseModal({
    form,
    open,
  });

  const onOk = () => {
    form.submit();
  };

  const catOptions = useMemo(() => {
    return allCategories.map((cat) => ({ value: cat.id, label: cat.title }));
  }, [allCategories]);

  const filterOption = (input: string, option?: Option): boolean =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  useEffect(() => {
    const activeItem = id ? data?.find((p) => p.id === id) : undefined;

    form.setFieldsValue({
      ...activeItem,
      category: activeItem?.category[0].id,
    });
  }, [id, data, form]);

  return (
    <Modal
      title="Add new parameter"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" name="adParam">
        <Form.Item
          label="Parameter name"
          name="name"
          rules={[
            { required: true, message: "Name of parameter can't be empty" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[
            { required: true, message: "Name of parameter can't be empty" },
          ]}
        >
          <Select options={catOptions} filterOption={filterOption} showSearch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
