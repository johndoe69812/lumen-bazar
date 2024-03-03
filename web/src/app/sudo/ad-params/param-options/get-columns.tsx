import { ParamOptionSchema } from "@/api";
import { TableColumnsType } from "antd";
import { dateFromNow } from "../../shared/utils/date-from-now";

export const getColumns = () => {
  const columns: TableColumnsType<ParamOptionSchema> = [
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
      title: "Total variants",
      dataIndex: "total",
      key: "total",
      render: (_, record) => <>{record.items.length}</>,
    },
    {
      title: "Date created",
      dataIndex: "dateCreated",
      key: "dateCreated",
      render: (_, record) => <>{dateFromNow(record.dateCreated)}</>,
    },
  ];

  return columns;
};
