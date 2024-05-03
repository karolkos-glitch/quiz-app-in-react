import type { Meta, StoryObj } from "@storybook/react";

import { ResultsView } from "@quiz/components/ResultsView";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ResultsView",
  component: ResultsView,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ResultsView>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const View: Story = {
  args: {
    quizResults: {
      answerStatistic: {
        correct: 8,
        false: 2,
        skipped: 0,
      },
      route: [
        { id: "1", questionResult: "false" },
        { id: "2", questionResult: "correct" },
        { id: "3", questionResult: "skipped" },
      ],
    },
  },
};
