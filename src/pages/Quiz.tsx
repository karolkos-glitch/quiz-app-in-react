import { QuizCreatorRenderer } from "@quiz/components/QuizCreatorRenderer";
import { QuizQuestionSkeleton } from "@quiz/components/QuizQuestionSkeleton";
import { lazy, Suspense } from "react";
import { useSearchParams, Navigate } from "react-router-dom";

const QuizView = lazy(() => import("@quiz/components/QuizView"));
export default function Quiz() {
  const [searchParams] = useSearchParams();
  const modeSearchParamValue = searchParams.get("mode");
  if (!modeSearchParamValue) return <Navigate to="/" />;
  const mode = JSON.parse(modeSearchParamValue);

  return (
    <QuizCreatorRenderer mode={mode}>
      {(quizInstance) => (
        <Suspense fallback={<QuizQuestionSkeleton />}>
          <QuizView quiz={quizInstance} />
        </Suspense>
      )}
    </QuizCreatorRenderer>
  );
}
