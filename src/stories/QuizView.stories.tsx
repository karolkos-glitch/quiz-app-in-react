import type { Meta } from "@storybook/react";

import QuizView from "@quiz/components/QuizView";
import { QuizCreatorRenderer } from "@quiz/components/QuizCreatorRenderer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/QuizView",
  component: QuizView,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof QuizView>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const View = {
  render: () => (
    <QuizCreatorRenderer mode={initialMode}>
      {(quizInstance) => <QuizView quiz={quizInstance} />}
    </QuizCreatorRenderer>
  ),
};

const initialMode = {
  label: "10 pytań",
  key: "10-questions",
  questionCount: 15,
};
