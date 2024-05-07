import { Button } from "@quiz/components/Button";
import { Typography } from "@quiz/components/Typography";
import type { QuizResults } from "@quiz/domain/quiz/types";
import { useNavigate } from "react-router-dom";
import { ResultsAnswersHistory } from "./ResultsAnswersHistory";
import { ResultsStats } from "./ResultsStats";

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
    <main className="flex flex-col justify-center items-center mx-2 gap-y-8 sm:h-screen">
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
          <ResultsStats
            quizCorrectAnswers={quizCorrectAnswers}
            quizFalseAnswers={quizFalseAnswers}
            quizSkippedAnswers={quizSkippedAnswers}
          />
          <ResultsAnswersHistory route={route} />
        </div>
      </section>
      <Button onClick={navigateToHome}>Zagraj jeszcze raz</Button>
    </main>
  );
};
