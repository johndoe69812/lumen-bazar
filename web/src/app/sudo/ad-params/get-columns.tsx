import {
  AdCategorySchema,
  AdParamSchema,
} from "@/api/__generated__/generated-api";
import { Button, Flex, TableColumnsType } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import APIService from "@/api/api-service";
import { useCallback } from "react";

const Actions = ({ id }: { id: number }) => {
  const handleDelete = useCallback(async () => {
    try {
      APIService.api.adsServiceDeleteAdParameter(id);
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  return (
    <Flex>
      <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete} />
    </Flex>
  );
};

export const getColumns = () => {
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
      render: (value, record) => <Actions id={record.id} />,
    },
  ];

  return columns;
};
