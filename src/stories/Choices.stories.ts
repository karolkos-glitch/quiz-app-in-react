import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Choices } from "@quiz/components/Choices";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Choices",
  component: Choices,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  args: {
    label: "Czy warto zastąpic błędy?",
    choices: [
      {
        key: "10-questions",
        label: "Option 1",
      },
      {
        key: "30-questions",
        label: "Option 2",
      },
      {
        key: "50-questions",
        label: "Option 3",
      },
    ],
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Choices>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SelectedOption: Story = {
  args: {
    selected: { key: "10-questions", label: "Option 1" },
    onChoice: fn(),
  },
};

export const WithoutSelectedOption: Story = {
  args: {
    selected: null,
    onChoice: fn(),
  },
};

export const ALotOfOptions: Story = {
  args: {
    selected: { key: "10-questions", label: "Option 5" },
    onChoice: fn(),
    choices: [
      {
        label: "Option 1",
        key: "10-questions",
      },
      {
        label: "Option 2",
        key: "30-questions",
      },
      {
        label: "Option 3",
        key: "50-questions",
      },
      {
        label: "Option 4",
        key: "70-questions",
      },
      {
        label: "Option 5",
        key: "80-questions",
      },
      {
        label: "Option 6",
        key: "90-questions",
      },
      {
        label: "Option 7",
        key: "100-questions",
      },
      {
        label: "Option 8",
        key: "120-questions",
      },
      {
        label: "Option 9",
        key: "150-questions",
      },
    ],
  },
};

export const GridVariant: Story = {
  args: {
    variant: "grid",
    choices: [
      {
        key: "10-questions",
        label: "Option 1",
      },
      {
        key: "30-questions",
        label: "Option 2",
      },
      {
        key: "50-questions",
        label: "Option 3",
      },
    ],
  },
};

export const GridVariantALotOfOptions: Story = {
  args: {
    variant: "grid",
    choices: [
      {
        label: "Option 1",
        key: "10-questions",
      },
      {
        label: "Option 2",
        key: "30-questions",
      },
      {
        label: "Option 3",
        key: "50-questions",
      },
      {
        label: "Option 4",
        key: "70-questions",
      },
      {
        label: "Option 5",
        key: "80-questions",
      },
      {
        label: "Option 6",
        key: "90-questions",
      },
      {
        label: "Option 7",
        key: "100-questions",
      },
      {
        label: "Option 8",
        key: "120-questions",
      },
      {
        label: "Option 9",
        key: "150-questions",
      },
    ],
  },
};
