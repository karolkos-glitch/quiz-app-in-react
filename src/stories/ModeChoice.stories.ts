import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ModeChoice } from "../components/ModeChoice";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ModeChoice",
  component: ModeChoice,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ModeChoice>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryChoice: Story = {
  args: {
    onChoice: fn(),
    modeChoices: [
      {
        label: "Option 1",
      },
      {
        label: "Option 2",
      },
      {
        label: "Option 3",
      },
    ],
  }
};