import { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./product-card";
import { generateBaseAd } from "@/mock-data/ads/generate-ads";

const meta = {
  title: "Cards/Product Card",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    // Stop *this* story from being stacked in Chromatic
    theme: "default",
    // these are to test the deprecated features of the Description block
    notes: "These are notes for the Button stories",
    info: "This is info for the Button stories",
    jsx: { useBooleanShorthandSyntax: false },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;

export const Default: StoryObj<typeof ProductCard> = {
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
  args: { ...generateBaseAd(0) },
};
