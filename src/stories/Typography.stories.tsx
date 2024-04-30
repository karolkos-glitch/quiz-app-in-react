import type { Meta, StoryObj } from "@storybook/react";

import Typography from "@quiz/components/Typography";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    as: "h1",
    variant: "primary",
    children: "Text content",
  },
};

export const Secondary: Story = {
  args: {
    as: "p",
    variant: "secondary",
    children: "Text content",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const White: Story = {
  args: {
    as: "span",
    variant: "white",
    children: "Text content",
  },
  decorators: (Story) => (
    <div className="bg-primary-800 border-2 p-4">{Story()}</div>
  ),
};
