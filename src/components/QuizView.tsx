import type { QuestionAnswer, Quiz } from "@quiz/domain/quiz/types";
import Typography from "@quiz/components/Typography";
import { Choices } from "@quiz/components/Choices";
import Button from "@quiz/components/Button";
import { useInGameQuiz } from "@quiz/domain/quiz/useInGameQuiz";
import { useState } from "react";
import { QuizQuestionSkeleton } from "./QuizQuestionSkeloton";
import { Transition } from "@headlessui/react";

const timeRemaining = "0";

export const QuizView = ({ quiz }: { quiz: Quiz }) => {
  const {
    questionIndex,
    currentQuestion,
    loadingNextQuestion,
    actions: { onAnswer, onSkip },
  } = useInGameQuiz(quiz, () => null);
  const [selectedAnswer, setSelectedAnswer] = useState<QuestionAnswer | null>(
    null
  );
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
          <Transition
            as="div"
            className="flex flex-col gap-y-4 justify-center items-center"
            appear
            show
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
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
          </Transition>
        ) : null}
        <div className="flex flex-col gap-x-4 gap-y-4">
          <Button
            disabled={!selectedAnswer}
            onClick={() => {
              if (!selectedAnswer) return;
              onAnswer(selectedAnswer);
              setSelectedAnswer(null);
            }}
          >
            odpowiedź
          </Button>
          <Button onClick={onSkip} variant="outlined">
            pomiń
          </Button>
        </div>
      </div>
    </main>
  );
};
