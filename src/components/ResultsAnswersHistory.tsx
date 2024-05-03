import { QuizResults } from "@quiz/domain/quiz/types";

type ResultsAnswerHistoryProps = {
  route: QuizResults["route"];
};

export const ResultsAnswerHistory = ({ route }: ResultsAnswerHistoryProps) => {
  return (
    <div className="grid grid-cols-5 gap-2">
      {route.map((quizAnswer) => (
        <div
          key={quizAnswer.id}
          className={`w-[25px] h-[25px] rounded-sm shadow-sm ${quizAnswer.questionResult === "correct" ? "bg-green-500" : "bg-red-500"} ${quizAnswer.questionResult === "skipped" ? "bg-gray-500" : ""}`}
        />
      ))}
    </div>
  );
};
