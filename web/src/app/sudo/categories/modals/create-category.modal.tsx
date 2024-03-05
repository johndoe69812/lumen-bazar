import { Form, FormInstance, Input, Modal, Select } from "antd";
import { FC, useCallback, useEffect, useState } from "react";
import { useFlatCategories } from "../../shared/queries/categories/use-flat-categories";
import { CreateCategoryDTO } from "@/api";

type CreateCategoryFormProps = {
  onFormInstanceReady: (instance: FormInstance<CreateCategoryDTO>) => void;
};

const CreateCategoryForm: FC<CreateCategoryFormProps> = (props) => {
  const { onFormInstanceReady } = props;

  const { data } = useFlatCategories();
  const [form] = Form.useForm();

  useEffect(() => {
    onFormInstanceReady(form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form form={form}>
      <Form.Item
        label="Name of category"
        name="title"
        rules={[{ required: true }]}
      >
        <Input placeholder="I.e cars" />
      </Form.Item>
      <Form.Item
        label="Parent category"
        name="parentId"
        rules={[{ required: true }]}
      >
        <Select options={data} fieldNames={{ value: "id", label: "title" }} />
      </Form.Item>
    </Form>
  );
};

type Props = {
  open: boolean;
  onCreate: (values: CreateCategoryDTO) => void;
  onCancel: () => void;
};

const CreateCategoryModal: FC<Props> = (props) => {
  const { open, onCreate, onCancel } = props;

  const [formInstance, setFormInstance] = useState<FormInstance>();

  const handleSubmit = useCallback(async () => {
    try {
      const values = await formInstance?.validateFields();
      formInstance?.resetFields();
      onCreate(values);
    } catch (error) {
      console.error(error);
    }
  }, [formInstance, onCreate]);

  return (
    <Modal
      title="Create new category"
      open={open}
      okText="Create"
      onOk={handleSubmit}
      onCancel={onCancel}
      destroyOnClose
    >
      <CreateCategoryForm
        onFormInstanceReady={(instance) => {
          setFormInstance(instance);
        }}
      />
    </Modal>
  );
};

export default CreateCategoryModal;
