import type { QuestionAnswer, Quiz } from "@quiz/domain/quiz/types";
import { Typography } from "@quiz/components/Typography";
import { Choices } from "@quiz/components/Choices";
import { Button } from "@quiz/components/Button";
import { useInGameQuizInstance } from "@quiz/domain/quiz/useInGameQuizInstance";
import { useState } from "react";
import { QuizQuestionSkeleton } from "@quiz/components/QuizQuestionSkeleton";
import { useTimeRemaining } from "@quiz/domain/quiz/useTimeRemaining";
import { useNavigate } from "react-router-dom";
import { createQuizResultInstance } from "@quiz/domain/quiz/createQuizResultInstance";
import { QuizQuestionViewWrapper } from "@quiz/components/QuizQuestionViewWrapper";

export const QuizView = ({ quiz }: { quiz: Quiz }) => {
  const navigate = useNavigate();
  const endGameAndRedirectToResults = (quizInstance: Quiz) => {
    const quizResults = createQuizResultInstance(quizInstance);
    const searchParams = new URLSearchParams({
      quizResults: JSON.stringify(quizResults),
    });
    const quizResultsSearchParamsString = searchParams.toString();
    navigate(`/results/?${quizResultsSearchParamsString}`);
  };
  const {
    questionIndex,
    currentQuestion,
    loadingNextQuestion,
    actions: { onAnswer, onSkip },
  } = useInGameQuizInstance(quiz, endGameAndRedirectToResults);

  const [selectedAnswer, setSelectedAnswer] = useState<QuestionAnswer | null>(
    null
  );
  const handleNextQuestion = () => {
    selectedAnswer ? onAnswer(selectedAnswer) : onSkip();
    setSelectedAnswer(null);
  };
  const { timeRemaining, resetTimeRemaining } = useTimeRemaining(
    10,
    handleNextQuestion
  );

  const handleAnswer = () => {
    if (!selectedAnswer) return;
    onAnswer(selectedAnswer);
    setSelectedAnswer(null);
    resetTimeRemaining();
  };

  const handleSkip = () => {
    onSkip();
    resetTimeRemaining();
    setSelectedAnswer(null);
  };

  const headerValue = `Pytanie ${questionIndex + 1}`;
  const currentQuestionIsReady = currentQuestion && !loadingNextQuestion;

  return (
    <main className="flex flex-col justify-center items-center my-4 sm:h-screen">
      <header className="flex justify-between w-64">
        <Typography as="h1" variant="secondary">
          {headerValue}
        </Typography>
        <Typography variant="secondary">{timeRemaining} sek.</Typography>
      </header>
      <div className="flex flex-col gap-y-4 items-center">
        {loadingNextQuestion ? <QuizQuestionSkeleton /> : null}
        {currentQuestionIsReady ? (
          <QuizQuestionViewWrapper question={currentQuestion.content}>
            <Choices
              label={currentQuestion.content.question}
              choices={currentQuestion.content.answers}
              selected={selectedAnswer}
              onChoice={setSelectedAnswer}
              variant="grid"
            />
          </QuizQuestionViewWrapper>
        ) : null}
        <div className="flex flex-col gap-x-4 gap-y-4">
          <Button
            onClick={handleAnswer}
            disabled={!selectedAnswer}
            variant={selectedAnswer ? "solid" : "questionable"}
          >
            odpowiedź
          </Button>
          <Button onClick={handleSkip} variant="outlined">
            pomiń
          </Button>
        </div>
      </div>
    </main>
  );
};
