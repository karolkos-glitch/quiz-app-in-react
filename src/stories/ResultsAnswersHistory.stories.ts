import type { StoryObj, Meta } from "@storybook/react";
import { ResultsAnswersHistory } from "@quiz/components/ResultsAnswersHistory";

const meta = {
  title: "Components/ResultsAnswersHistory",
  component: ResultsAnswersHistory,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResultsAnswersHistory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    route: [
      { id: "1", questionResult: "false" },
      { id: "2", questionResult: "correct" },
      { id: "3", questionResult: "skipped" },
      { id: "1", questionResult: "false" },
      { id: "2", questionResult: "correct" },
      { id: "1", questionResult: "false" },
      { id: "2", questionResult: "correct" },
      { id: "3", questionResult: "skipped" },
      { id: "1", questionResult: "false" },
      { id: "2", questionResult: "correct" },
      { id: "3", questionResult: "skipped" },
    ],
  },
};
