import { Meta, StoryObj } from "@storybook/react";
import ProductCategories from "./product-categories";
import { PLACEHOLD_CATEGORIES } from "./constants";

const meta = {
  title: "Cards/Product Categories",
  component: ProductCategories,
  tags: ["autodocs"],
  parameters: {
    jsx: { useBooleanShorthandSyntax: false },
  },
} satisfies Meta<typeof ProductCategories>;

export default meta;

export const Default = () => (
  <ProductCategories categories={PLACEHOLD_CATEGORIES} />
);
