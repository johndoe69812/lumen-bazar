import { BarsOutlined } from "@ant-design/icons";
import { Col, Form, Row, Typography } from "antd";
import clsx from "clsx";
import { ComponentProps, FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  isActive?: boolean;
};

const SectionItem: FC<Props> = (props) => {
  const { isActive, ...rest } = props;

  return (
    <div {...rest}>
      <Form.Item
        className={clsx(
          "px-6 py-3 cursor-pointer opacity-80 hover:opacity-100",
          isActive && "opacity-100 bg-blue-50"
        )}
      >
        <Row align="top">
          <Col flex="25px" className="mt-[-1px] text-lg">
            <BarsOutlined />
          </Col>
          <Col>
            <Typography.Title className="!mb-0" level={5} editable>
              Section name
            </Typography.Title>
            <Typography.Text>10 fields</Typography.Text>
          </Col>
        </Row>
      </Form.Item>
    </div>
  );
};

export default SectionItem;
