import type { QuestionAnswer, Quiz } from "@quiz/domain/quiz/types";
import Typography from "@quiz/components/Typography";
import { Choices } from "@quiz/components/Choices";
import Button from "@quiz/components/Button";
import { useInGameQuiz } from "@quiz/domain/quiz/useInGameQuiz";
import { useState } from "react";

const timeRemaining = "0";

export const QuizView = ({ quiz }: { quiz: Quiz }) => {
  const {
    questionIndex,
    currentQuestion,
    actions: { onAnswer, onSkip },
  } = useInGameQuiz(quiz, () => null);
  const [selectedAnswer, setSelectedAnswer] = useState<QuestionAnswer | null>(
    null
  );

  const headerValue = `Pytanie ${questionIndex + 1}`;
  if (!currentQuestion) return null;
  const { question, answers, image } = currentQuestion.content;

  return (
    <main className="w-full">
      <header className="flex justify-between w-full">
        <Typography as="h1" variant="secondary">
          {headerValue}
        </Typography>
        <Typography variant="secondary">{timeRemaining} sek.</Typography>
      </header>
      <div className="flex flex-col gap-y-4 items-center">
        {image ? (
          <figure>
            <img
              className="object-contain"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.heigth}
            />
          </figure>
        ) : null}
        <Choices
          label={question}
          choices={answers}
          onChoice={setSelectedAnswer}
        />
        <div className="flex flex-col gap-x-4 gap-y-4">
          <Button onClick={onSkip} variant="outlined">
            pomiń
          </Button>
          <Button
            disabled={!selectedAnswer}
            onClick={() => {
              if (!selectedAnswer) return;
              onAnswer(selectedAnswer);
            }}
          >
            odpowiedz
          </Button>
        </div>
      </div>
    </main>
  );
};
