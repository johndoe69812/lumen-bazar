"use client";

import { Flex, Result } from "antd";
import { FC, useMemo } from "react";
import Constructor from "./components/constructor/constructor";
import { useFlatCategories } from "../../shared/queries";
import ConstructorHeader from "./components/constructor-header";

type Props = {
  params: { catId: string };
};

const FormConstructorPage: FC<Props> = (props) => {
  const { catId } = props.params;

  const { isLoading, data } = useFlatCategories();

  const targetCategory = useMemo(() => {
    return data?.find((cat) => cat.id === parseInt(catId, 10));
  }, [data, catId]);

  if (!isLoading && !targetCategory) {
    return <Result status="error" title="Category not found" />;
  }

  return (
    <>
      <ConstructorHeader categoryName={targetCategory?.title ?? ""} />
      <Flex vertical gap={16}>
        <Constructor />
      </Flex>
    </>
  );
};

export default FormConstructorPage;
