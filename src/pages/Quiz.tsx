import { QuizCreatorRenderer } from "@quiz/components/QuizCreator";
import { QuizView } from "@quiz/components/QuizView";

const initialMode = {
  label: "10 pytań",
  key: "10-questions",
  questionCount: 15,
};

export default function Quiz() {
  return (
    <QuizCreatorRenderer mode={initialMode}>
      {(quizInstance) => <QuizView quiz={quizInstance} />}
    </QuizCreatorRenderer>
  );
}
