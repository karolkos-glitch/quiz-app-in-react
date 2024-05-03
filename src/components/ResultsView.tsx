import Button from "@quiz/components/Button";
import Typography from "@quiz/components/Typography";
import type { QuizResults } from "@quiz/domain/quiz/types";
import { useNavigate } from "react-router-dom";

type ResultsViewProps = {
  quizResults: QuizResults;
};
export const ResultsView = ({
  quizResults: {
    answerStatistic: {
      correct: quizCorrectAnswers,
      false: quizFalseAnswers,
      skipped: quizSkippedAnswers,
    },
    route,
  },
}: ResultsViewProps) => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");
  return (
    <main className="flex flex-col gap-y-8">
      <header className="text-center text-4xl sm:flex gap-x-8">
        <Typography as="h1" className="font-thin">
          Twój wynik
        </Typography>
        <Typography className="font-bold">{quizCorrectAnswers} pkt</Typography>
      </header>
      <section className="flex flex-col gap-y-4">
        <Typography as="h2" variant="secondary" className="underline text-2xl">
          Odpowiedzi:
        </Typography>
        <div className="flex flex-col gap-y-4 justify-center items-start sm:flex-row sm:gap-x-4">
          <ul>
            <li className="flex justify-between gap-x-2 text-xl">
              <Typography className="text-green-500">Poprawne</Typography>
              <Typography variant="secondary">{quizCorrectAnswers}</Typography>
            </li>
            <li className="flex justify-between gap-x-2 text-xl">
              <Typography className="text-red-500">Niepoprawne</Typography>
              <Typography variant="secondary">{quizFalseAnswers}</Typography>
            </li>
            <li className="flex justify-between gap-x-2 text-xl">
              <Typography variant="secondary">Pominięte: </Typography>
              <Typography variant="secondary">{quizSkippedAnswers}</Typography>
            </li>
          </ul>
          <div className="grid grid-cols-5 gap-2">
            {route.map((quizAnswer) => (
              <div
                key={quizAnswer.id}
                className={`w-[25px] h-[25px] rounded-sm shadow-sm ${quizAnswer.questionResult === "correct" ? "bg-green-500" : "bg-red-500"} ${quizAnswer.questionResult === "skipped" ? "bg-gray-500" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>
      <Button onClick={navigateToHome}>Zagraj jeszcze raz</Button>
    </main>
  );
};
