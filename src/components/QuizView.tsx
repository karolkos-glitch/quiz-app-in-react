import type { QuestionAnswer, Quiz } from "@quiz/domain/quiz/types";
import { Typography } from "@quiz/components/Typography";
import { Choices } from "@quiz/components/Choices";
import { Button } from "@quiz/components/Button";
import { useInGameQuizInstance } from "@quiz/domain/quiz/useInGameQuizInstance";
import { useState } from "react";
import { QuizQuestionSkeleton } from "@quiz/components/QuizQuestionSkeleton";
import { useTimeRemaining } from "@quiz/domain/quiz/useTimeRemaining";
import { AppearenceTransition } from "@quiz/components/AppearenceTransition";
import { useNavigate } from "react-router-dom";
import { createQuizResultInstance } from "@quiz/domain/quiz/createQuizResultInstance";

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
    null,
  );
  const handleNextQuestion = () => {
    selectedAnswer ? onAnswer(selectedAnswer) : onSkip();
    setSelectedAnswer(null);
  };
  const { timeRemaining, resetTimeRemaining } = useTimeRemaining(
    10,
    handleNextQuestion,
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
          <AppearenceTransition
            as="div"
            className="flex flex-col gap-y-4 justify-center items-center"
          >
            <figure>
              <img
                className="object-contain"
                src={
                  currentQuestion.content.image?.src ??
                  "https://picsum.photos/300/200"
                }
                alt={currentQuestion.content.image?.alt ?? "Lorem ipsum"}
                width={currentQuestion.content.image?.width ?? "300"}
                height={currentQuestion.content.image?.heigth ?? "200"}
              />
            </figure>
            <Choices
              label={currentQuestion.content.question}
              choices={currentQuestion.content.answers}
              selected={selectedAnswer}
              onChoice={setSelectedAnswer}
            />
          </AppearenceTransition>
        ) : null}
        <div className="flex flex-col gap-x-4 gap-y-4">
          <Button disabled={!selectedAnswer} onClick={handleAnswer}>
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
