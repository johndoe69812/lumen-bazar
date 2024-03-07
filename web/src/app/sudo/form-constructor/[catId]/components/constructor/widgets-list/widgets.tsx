import { UploadOutlined } from "@ant-design/icons";
import { MdOutlineAttachMoney } from "@react-icons/all-files/md/MdOutlineAttachMoney";
import { ReactNode } from "react";

// - TextField
// - RadioGroup
// - ButtonGroup (configs:type  button | radio)
// - Select (configs: allowSearch)
// - TextArea (configs: autocomplete)
// - CheckboxGroup (config: columns)
// - ColorPicker
// - Uploader

// Primitive: Custom: -Salary - Price;

type WidgetLI = {
  label: string;
  id: number;
  group?: string;
  icon?: ReactNode;
};

export const AllWidgets: WidgetLI[] = [
  {
    label: "TextField",
    id: 1,
    group: "primitive",
  },
  {
    label: "Uploader",
    id: 2,
    icon: <UploadOutlined />,
  },
  {
    label: "Text Area",
    id: 3,
  },
  {
    label: "Salary",
    id: 4,
    icon: <MdOutlineAttachMoney />,
  },
  {
    label: "Price",
    id: 5,
    icon: <MdOutlineAttachMoney />,
  },
];
