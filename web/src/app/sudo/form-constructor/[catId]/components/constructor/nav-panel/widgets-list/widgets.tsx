import { GroupOutlined, UploadOutlined } from "@ant-design/icons";
import { MdOutlineAttachMoney } from "@react-icons/all-files/md/MdOutlineAttachMoney";
import { CiBoxList } from "@react-icons/all-files/ci/CiBoxList";

import { ReactNode } from "react";
import { WidgetType } from "../../widgets-config";

// - TextField
// - RadioGroup
// - ButtonGroup (configs:type  button | radio)
// - Select (configs: allowSearch)
// - TextArea (configs: autocomplete)
// - CheckboxGroup (config: columns)
// - ColorPicker
// - Uploader

// Primitive: Custom: -Salary - Price;

export type Widget = {
  label: string;
  id: WidgetType;
  group?: string;
  icon?: ReactNode;
};

export const AllWidgets: Widget[] = [
  {
    label: "TextField",
    id: "inputWidget",
    group: "primitive",
  },
  {
    label: "Group",
    id: "groupWidget",
    group: "primitive",
    icon: <GroupOutlined />,
  },
  {
    label: "Uploader",
    id: "uploaderWidget",
    icon: <UploadOutlined />,
  },
  {
    label: "Text Area",
    id: "descriptionWidget",
  },
  {
    label: "Salary",
    id: "salaryWidget",
    icon: <MdOutlineAttachMoney />,
  },
  {
    label: "Price",
    id: "priceWidget",
    icon: <MdOutlineAttachMoney />,
  },
  {
    label: "Select",
    id: "selectWidget",
    icon: <CiBoxList />,
  },
];
