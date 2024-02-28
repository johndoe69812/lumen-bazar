import { AdParamSchema } from "@/api";
import { TableColumnsType } from "antd";

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
