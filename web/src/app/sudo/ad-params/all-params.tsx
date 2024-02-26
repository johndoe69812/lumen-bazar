"use client";

import { AdParamSchema } from "@/api";
import { AdCategorySchema } from "@/api/__generated__/generated-api";
import APIService from "@/api/api-service";
import useAllCategories from "@/shared/hooks/use-all-categories";
import {
  Form,
  Button,
  Input,
  Modal,
  Table,
  Select,
  TableColumnsType,
} from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const getColumns = () => {
  const columns: TableColumnsType<AdParamSchema> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",

      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (categories: AdCategorySchema[]) => (
        <>{categories.reduce((acc, { title }) => (acc += ", " + title), "")}</>
      ),
    },
    {
      title: "Data Type",
      dataIndex: "dataType",
      key: "dataType",
    },
    {
      title: "Data Created",
      dataIndex: "dateCreated",
      key: "dateCreated",
    },
  ];

  return columns;
};

const useAllParams = () => {
  const [data, setData] = useState<AdParamSchema[]>([]);

  const fetchData = useCallback(async () => {
    const data = await APIService.api.adsServiceGetAllParameters();
    setData(data);
  }, []);

  useEffect(() => {
    fetchData();

    return () => {
      setData([]);
    };
  }, []);

  return { data, refetch: fetchData };
};

// reset form fields when modal is form, closed
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

interface ModalFormProps {
  open: boolean;
  onCancel: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ open, onCancel }) => {
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
          <Select options={catOptions} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const AllParameters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, refetch } = useAllParams();

  const handleAddParam = useCallback(async (name: string, category: number) => {
    await APIService.api.adsServiceCreateParam({
      name,
      categories: [category],
    });
  }, []);

  const columns = useMemo(() => getColumns(), []);

  return (
    <div>
      <Form.Provider
        onFormFinish={async (name, { values, forms }) => {
          if (name !== "adParam") return;

          try {
            await handleAddParam(values["name"], values["category"]);
            setIsModalOpen(false);
            refetch();
          } catch (e) {
            console.error(e);
          }
        }}
      >
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Add new parameter
        </Button>
        <ModalForm open={isModalOpen} onCancel={() => setIsModalOpen(false)} />
      </Form.Provider>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default AllParameters;
