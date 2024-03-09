import { BarsOutlined } from "@ant-design/icons";
import { Col, Form, Row, Typography } from "antd";

const SectionItem = () => {
  return (
    <Form.Item>
      <Row align="middle">
        <Col flex="40px">
          <BarsOutlined />
        </Col>
        <Col>
          <Typography.Title level={5}>category name</Typography.Title>
        </Col>
      </Row>
    </Form.Item>
  );
};

export default SectionItem;
