import { Button, Divider, Flex, Form, Input, Modal, Select } from "antd";
import { FC, useCallback, useEffect, useMemo } from "react";
import { useAllParams } from "../../../shared/queries/use-all-params";
import useResetFormOnCloseModal from "@/app/sudo/shared/hooks/use-reset-form-on-close-modal";
import { MinusCircleOutlined } from "@ant-design/icons";

interface Props {
  open: boolean;
  onCancel: () => void;
  id?: number;
}

const EditModal: FC<Props> = (props) => {
  const { id, open, onCancel } = props;

  const { data } = useAllParams();
  const [form] = Form.useForm();

  useResetFormOnCloseModal({
    form,
    open,
  });

  const onOk = () => {
    form.submit();
  };

  useEffect(() => {
    const activeItem = id ? data?.find((p) => p.id === id) : undefined;

    form.setFieldsValue({
      ...activeItem,
      category: activeItem?.category[0].id,
    });
  }, [id, data, form]);

  return (
    <Modal title="Add new option" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="adOptions">
        <Form.Item
          label="Option name"
          name="name"
          rules={[
            { required: true, message: "Name of parameter can't be empty" },
          ]}
        >
          <Input placeholder="I.e Color" />
        </Form.Item>
        <Divider />
        <Form.List
          name="items"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
                  return Promise.reject(
                    new Error("Option should contain at least one variant")
                  );
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }) => (
            <>
              <Form.Item>
                <Button onClick={() => add()}>Add new variant</Button>
              </Form.Item>
              <Flex vertical>
                {fields.map(({ key, ...field }, index) => (
                  <Form.Item key={key} style={{ marginBottom: 8 }}>
                    <Flex gap={4} justify="space-between">
                      <Form.Item
                        name={[index, "name"]}
                        noStyle
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Variant label" />
                      </Form.Item>
                      <Form.Item
                        name={[index, "value"]}
                        noStyle
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Variant value" />
                      </Form.Item>
                      <MinusCircleOutlined
                        style={{ paddingLeft: 8, paddingRight: 8 }}
                        onClick={() => remove(field.name)}
                      />
                    </Flex>
                  </Form.Item>
                ))}
              </Flex>
            </>
          )}
        </Form.List>
      </Form>
    </Modal>
  );
};

export default EditModal;
