"use client";

import AllParameters from "./all-params/all-parameters";
import ParamOptions from "./param-options/param-options";
import { Flex, Popover, Space, Typography } from "antd";
import PageHeadline from "../shared/components/page-headline";
import { InfoCircleOutlined } from "@ant-design/icons";

const AdParamsPage = () => {
  return (
    <>
      <Space direction="vertical" size={0}>
        <PageHeadline
          title="Ad attributes"
          subTitle="Setup advertisements attributes and their options"
        />
      </Space>
      <div className="flex flex-col gap-4">
        <div className="card">
          <Typography.Title level={3}>All attributes</Typography.Title>
          <AllParameters />
        </div>
        <div className="card">
          <Flex gap={8} align="center">
            <Typography.Title level={3}>Options</Typography.Title>
            <Popover
              title="Info"
              content="Predefined options like color or drive type"
            >
              <InfoCircleOutlined />
            </Popover>
          </Flex>
          <ParamOptions />
        </div>
      </div>
    </>
  );
};

export default AdParamsPage;
