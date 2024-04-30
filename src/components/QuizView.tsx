import type { QuestionAnswer } from "@quiz/types/quiz";
import Typography from "./Typography";
import { Choices } from "./Choices";
import Button from "./Button";

const headerValue = "Pytanie 1";
const timeRemaining = "0";
const questionImg = {
  src: "https://picsum.photos/300/200",
  alt: "Lorem picsum",
  width: 300,
  heigth: 200,
};
const questionText = "Jak się nazywa pan po prawej?";
const questionAnswers = [
  {
    key: "key-1",
    label: "Dwight",
  },
  {
    key: "key-2",
    label: "Jim",
  },
  {
    key: "key-3",
    label: "Pam",
  },
  {
    key: "key-4",
    label: "Micheal",
  },
] satisfies QuestionAnswer[];

export const QuizView = () => {
  return (
    <main className="w-full">
      <header className="flex justify-between w-full">
        <Typography as="h1" variant="secondary">
          {headerValue}
        </Typography>
        <Typography variant="secondary">{timeRemaining} sek.</Typography>
      </header>
      <div className="flex flex-col gap-y-4 items-center">
        <figure>
          <img
            className="object-contain"
            src={questionImg.src}
            alt={questionImg.alt}
            width={questionImg.width}
            height={questionImg.heigth}
          />
        </figure>
        <Choices
          label={questionText}
          choices={questionAnswers}
          onChoice={() => null}
        />
        <div className="flex flex-col gap-x-4 gap-y-4">
          <Button variant="outlined">pomiń</Button>
          <Button>odpowiedz</Button>
        </div>
      </div>
    </main>
  );
};
