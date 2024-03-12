"use client";

import { Space, Typography } from "antd";
import { FC } from "react";

type Props = {
  title: string;
  subTitle?: string;
};

const PageHeadline: FC<Props> = (props) => {
  const { title, subTitle } = props;

  return (
    <Space direction="vertical" style={{ marginBottom: 24 }}>
      <Typography.Title
        level={1}
        style={{ margin: 0 }}
        className="!text-indigo-900"
      >
        {title}
      </Typography.Title>
      {subTitle && (
        <Typography.Title
          level={5}
          style={{ margin: 0 }}
          className="!text-indigo-900"
        >
          {subTitle}
        </Typography.Title>
      )}
    </Space>
  );
};

export default PageHeadline;
