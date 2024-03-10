import { EyeOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Typography } from "antd";

const Header = () => {
  return (
    <div className="w-full h-16 bg-white drop-shadow-sm">
      <Row align="middle" className="h-full">
        <Col flex="auto">
          <Flex align="center" justify="center">
            <Typography.Title level={4} className="!mb-0">
              Section Name
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

export default Header;
