import APIService from "@/api/api-service";
import Heading from "@/shared/components/heading";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Flex, Row, Tag } from "antd";
import type { NextPage } from "next";
import { FC } from "react";
import Constructor from "./components/constructor/constructor";

async function getData() {
  APIService.http.baseUrl = "http://nest-api:3000";
  const params = await APIService.api.adsServiceGetAllParameters();

  console.log("ad-params", params);

  return {
    params,
  };
}

type Props = {
  params: { catId: string };
};
const FormConstructorPage: FC<Props> = async (props) => {
  const { catId } = props.params;

  console.log("props", catId);
  const { params } = await getData();

  return (
    <div>
      <Heading variant="h2" className="text-indigo-900">
        Form Constructor
      </Heading>
      <Flex vertical gap={16}>
        <Card>
          <Flex gap="small" wrap="wrap">
            {params.map((param) => (
              <Tag key={param.id}>
                {param.id} {param.name}
              </Tag>
            ))}
          </Flex>
        </Card>
        <Constructor />
      </Flex>
    </div>
  );
};

export default FormConstructorPage;
