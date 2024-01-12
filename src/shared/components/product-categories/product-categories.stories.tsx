import { Meta } from "@storybook/react";
import ProductCategories from "./product-categories";

const meta = {
  title: "Cards/Product Categories",
  component: ProductCategories,
  tags: ["autodocs"],
  parameters: {
    jsx: { useBooleanShorthandSyntax: false },
  },
} satisfies Meta<typeof ProductCategories>;

export default meta;

export const Default = () => <ProductCategories />;
