import { Meta } from "@storybook/react";
import Header from "./header";

const meta = {
  title: "Shared Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    // Stop *this* story from being stacked in Chromatic
    theme: "default",
    // these are to test the deprecated features of the Description block
    notes: "These are notes for the Button stories",
    info: "This is info for the Button stories",
    jsx: { useBooleanShorthandSyntax: false },
  },
} satisfies Meta<typeof Header>;

export default meta;

export const Default = () => <Header />;
