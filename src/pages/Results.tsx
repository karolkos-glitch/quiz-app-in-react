import { AppearenceTransition } from "@quiz/components/AppearenceTransition";
import { Typography } from "@quiz/components/Typography";
import { QuizResults } from "@quiz/domain/quiz/types";
import { lazy, Suspense } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
const ResultsView = lazy(() =>
  import("@quiz/components/ResultsView").then((module) => ({
    default: module.ResultsView,
  })),
);
export default function Results() {
  const [searchParams] = useSearchParams();
  const quizResultsSearchParamValue = searchParams.get("quizResults");
  if (!quizResultsSearchParamValue) return <Navigate to="/" />;
  const quizResults = JSON.parse(quizResultsSearchParamValue) as QuizResults;

  return (
    <Suspense
      fallback={
        <main className="flex flex-col my-4">
          <Typography variant="primary" className="text-center">
            Poczekaj chwilkę...
          </Typography>
        </main>
      }
    >
      <AppearenceTransition>
        <ResultsView quizResults={quizResults} />
      </AppearenceTransition>
    </Suspense>
  );
}
