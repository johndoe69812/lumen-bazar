"use client";

import Heading from "@/shared/components/heading";
import { Flex, Result } from "antd";
import { FC, useMemo } from "react";
import Constructor from "./components/constructor/constructor";
import { useFlatCategories } from "../../shared/queries";
import PageHeadline from "../../shared/components/page-headline";

type Props = {
  params: { catId: string };
};
const FormConstructorPage: FC<Props> = (props) => {
  const { catId } = props.params;

  const { isFetched, data } = useFlatCategories();

  const targetCategory = useMemo(() => {
    return data?.find((cat) => cat.id === parseInt(catId, 10));
  }, [data, catId]);

  if (isFetched && !targetCategory) {
    return <Result status="error" title="Category not found" />;
  }

  return (
    <>
      <PageHeadline title={`Form Constructor (${targetCategory?.title})`} />
      <Flex vertical gap={16}>
        <Constructor />
      </Flex>
    </>
  );
};

export default FormConstructorPage;
