import {
  AdCategorySchema,
  AdParamSchema,
} from "@/api/__generated__/generated-api";
import { Button, Checkbox, Flex, TableColumnsType } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import APIService from "@/api/api-service";
import { FC, useCallback } from "react";
import { dateFromNow } from "../../shared/utils/date-from-now";

type Handlers = {
  onEdit: (id: React.Key) => void;
  onDelete: (id: React.Key) => void;
};

type Props = Handlers & {
  id: React.Key;
};

const Actions: FC<Props> = (props) => {
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
      title: "Data type",
      dataIndex: "dataType",
      key: "dataType",
    },
    {
      title: "Date created",
      dataIndex: "dateCreated",
      key: "dateCreated",
      render: (_, record) => <>{dateFromNow(record.dateCreated)}</>,
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
