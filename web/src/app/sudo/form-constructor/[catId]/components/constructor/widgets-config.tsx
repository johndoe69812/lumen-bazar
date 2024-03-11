type IWidget = {
  label: string;
  description: string;
  sorting: number;
  children?: IWidget[];
  comment?: string;
};

export interface SelectWidget extends IWidget {
  paramId: number;
  config: {
    isMultiple: boolean;
    isSearchable: boolean;
    hideTitle: boolean;
  };
}

export interface UploaderWidget extends IWidget {
  paramId: number;
  config: {
    maxFilesCount: number;
    minFilesCount: number;
    maxFileSize: string;
    allowedExtensions: string[];
  };
}

type GroupChildrenWidget = SelectWidget | CheckboxGroup;

export interface CheckboxGroup extends IWidget {
  paramId: number;
  config: {
    isRadio: boolean;
    isMultiple: boolean;
  };
}

export interface GroupWidget extends IWidget {
  config: {
    maxColumns: number;
  };
  allowedChildren: GroupChildrenWidget;
}

export interface InputWidget extends IWidget {
  paramId: number;
  regExp: string;
}

export interface DescriptionWidget extends IWidget {
  paramId: number;
}

export interface SwitcherWidget extends IWidget {
  paramId: number;
}

export interface LocationWidget extends IWidget {
  paramId: number;
}

export interface ButtonGroupWidget extends IWidget {
  paramId: number;
}

export interface PriceWidget extends IWidget {
  paramId: number;
  config: {
    minValue: number;
    maxValue: number;
  };
}

export interface SalaryWidget extends IWidget {
  paramId: number;
  config: {
    minValue: number;
    maxValue: number;
  };
}

export interface ContactsWidget extends IWidget {
  paramId: number;
}

export interface ColorPickerWidget extends IWidget {
  paramId: number;
}

export type AnyWidget =
  | SelectWidget
  | UploaderWidget
  | CheckboxGroup
  | GroupWidget
  | InputWidget
  | DescriptionWidget
  | SwitcherWidget
  | LocationWidget
  | ButtonGroupWidget
  | PriceWidget
  | SalaryWidget
  | ContactsWidget
  | ColorPickerWidget;

export type WidgetType =
  | "selectWidget"
  | "uploaderWidget"
  | "checkboxGroup"
  | "groupWidget"
  | "inputWidget"
  | "descriptionWidget"
  | "switcherWidget"
  | "locationWidget"
  | "buttonGroupWidget"
  | "priceWidget"
  | "salaryWidget"
  | "contactsWidget"
  | "colorPickerWidget";
