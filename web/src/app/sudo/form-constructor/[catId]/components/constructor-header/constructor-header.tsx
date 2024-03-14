import { EyeOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Tag, Typography } from "antd";
import { FC } from "react";
import useSectionsStore from "../../../store/use-sections-store";

type Props = {
  categoryName: string;
};

const ConstructorHeader: FC<Props> = (props) => {
  const { categoryName } = props;

  const section = useSectionsStore((store) =>
    store.list.find((section) => section.id === store.activeId)
  );

  return (
    <div className="relative z-10 w-full h-16 shadow bg-white">
      <Row align="middle" className="h-full">
        <Col flex="250px" />
        <Col flex="auto">
          <Flex align="center" justify="center">
            <Typography.Title level={4} className="!mb-0">
              {categoryName}/{section && section.title}
            </Typography.Title>
          </Flex>
        </Col>
        <Col flex="250px">
          <Flex gap={8}>
            <Button size="middle" icon={<EyeOutlined />}>
              Preview
            </Button>
            <Button size="middle" type="primary" icon={<SaveOutlined />}>
              Save
            </Button>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default ConstructorHeader;
