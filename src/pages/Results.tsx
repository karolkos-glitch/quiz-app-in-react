import { ResultsView } from "@quiz/components/ResultsView";
import { QuizResults } from "@quiz/domain/quiz/types";
import { Navigate, useSearchParams } from "react-router-dom";

export default function Results() {
  const [searchParams] = useSearchParams();
  const quizResultsSearchParamValue = searchParams.get("quizResults");
  if (!quizResultsSearchParamValue) return <Navigate to="/" />;
  const quizResults = JSON.parse(quizResultsSearchParamValue) as QuizResults;

  return <ResultsView quizResults={quizResults} />;
}
