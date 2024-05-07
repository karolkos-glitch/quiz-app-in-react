import { QuizResults } from "@quiz/domain/quiz/types";

type ResultsAnswerHistoryProps = {
  route: QuizResults["route"];
};

export const ResultsAnswersHistory = ({ route }: ResultsAnswerHistoryProps) => {
  return (
    <div className="grid grid-cols-5 gap-2">
      {route.map((quizAnswer) => (
        <div
          key={quizAnswer.id}
          className={`w-[25px] h-[25px] rounded-sm shadow-sm ${quizAnswer.questionResult === "correct" ? "bg-green-500" : ""} ${quizAnswer.questionResult === "false" ? "bg-red-500" : ""} ${quizAnswer.questionResult === "skipped" ? "border-2 border-gray-500" : ""}`}
        />
      ))}
    </div>
  );
};
