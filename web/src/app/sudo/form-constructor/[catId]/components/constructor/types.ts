export type FormValues = {
  sections: {
    id: number;
    title: number;
  }[];
  fields: {
    sectionId: number;
    label: string;
    config?: Record<string, unknown>;
    children?: Object[];
  };
};

export type WidgetField = {
  id: string;
};
