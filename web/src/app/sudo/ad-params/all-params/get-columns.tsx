import {
  AdCategorySchema,
  AdParamSchema,
} from "@/api/__generated__/generated-api";
import { Button, Checkbox, Flex, TableColumnsType } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import APIService from "@/api/api-service";
import { useCallback } from "react";

type Handlers = {
  onEdit: (id: React.Key) => void;
  onDelete: (id: React.Key) => void;
};

type Props = Handlers & {
  id: React.Key;
};

const Actions = (props: Props) => {
  const { id, onDelete, onEdit } = props;

  return (
    <Flex gap={8}>
      <Button
        shape="circle"
        icon={<DeleteOutlined />}
        onClick={() => onDelete(id)}
      />
      <Button
        shape="circle"
        icon={<EditOutlined />}
        onClick={() => onEdit(id)}
      />
    </Flex>
  );
};

export const getColumns = ({ onEdit, onDelete }: Handlers) => {
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
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (value, record) => (
        <Actions id={record.id} onEdit={onEdit} onDelete={onDelete} />
      ),
    },
  ];

  return columns;
};
