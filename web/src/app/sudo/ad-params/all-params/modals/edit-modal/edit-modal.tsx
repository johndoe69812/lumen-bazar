import { Option } from "@/shared/components/form/select/types";
import useAllCategories from "@/shared/hooks/use-all-categories";
import { Form, Input, Modal, Select, Tooltip } from "antd";
import { useEffect, useMemo } from "react";
import { useAllParams } from "../../../../shared/queries/use-all-params";
import useResetFormOnCloseModal from "@/app/sudo/shared/hooks/use-reset-form-on-close-modal";

import ParamSettings from "./param-settings";

interface Props {
  open: boolean;
  onCancel: () => void;
  id?: number;
}

const EditModal: React.FC<Props> = (props: Props) => {
  const { id, open, onCancel } = props;

  const { data: allParams } = useAllParams();
  const { allCategories } = useAllCategories(false, true);
  const [form] = Form.useForm();

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
    const activeItem = id ? allParams?.find((p) => p.id === id) : undefined;

    form.setFieldsValue({
      ...activeItem,
      categoryId: activeItem?.category[0].id,
    });
  }, [id, allParams, form]);

  const dataType = Form.useWatch((values) => values.dataType, form);

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
          name="categoryId"
          rules={[
            { required: true, message: "Name of parameter can't be empty" },
          ]}
        >
          <Select options={catOptions} filterOption={filterOption} showSearch />
        </Form.Item>
        <Form.Item
          label="Data type"
          name="dataType"
          rules={[
            { required: true, message: "Name of parameter can't be empty" },
          ]}
        >
          <Select
            options={[
              { label: "Options", value: "options" },
              { label: "Number", value: "number" },
              { label: "String", value: "string" },
            ]}
          />
        </Form.Item>
        <ParamSettings dataType={dataType} />
      </Form>
    </Modal>
  );
};

export default EditModal;
