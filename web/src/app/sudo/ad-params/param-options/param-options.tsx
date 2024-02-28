"use client";

import { Table } from "antd";
import { getColumns } from "./get-columns";
import { useMemo } from "react";

const ParamOptions = () => {
  const columns = useMemo(() => getColumns(), []);
  const data = [];

  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default ParamOptions;
