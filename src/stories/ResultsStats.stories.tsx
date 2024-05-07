import type { StoryObj, Meta } from "@storybook/react";

import { ResultsStats } from "@quiz/components/ResultsStats";

const meta = {
  title: "Components/ResultsStats",
  component: ResultsStats,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResultsStats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    quizCorrectAnswers: 8,
    quizFalseAnswers: 2,
    quizSkippedAnswers: 0,
  },
};
