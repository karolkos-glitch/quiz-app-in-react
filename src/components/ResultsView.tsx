import Button from "@quiz/components/Button";
import Typography from "@quiz/components/Typography";
import type { QuizResults } from "@quiz/domain/quiz/types";

const quizResult = "12";
const quizCorrectAnswers = "10";
const quizFalseAnswers = "2";
const quizSkippedAnswers = "0";
const quizRoute = [
  { id: "1", questionResult: "skipped" },
  { id: "2", questionResult: "correct" },
  { id: "3", questionResult: "false" },
  { id: "4", questionResult: "correct" },
  { id: "5", questionResult: "false" },
  { id: "6", questionResult: "correct" },
  { id: "7", questionResult: "false" },
  { id: "8", questionResult: "correct" },
] satisfies QuizResults["route"];

export const ResultsView = () => {
  return (
    <main className="flex flex-col gap-y-8">
      <header className="text-center text-4xl sm:flex gap-x-8">
        <Typography as="h1" className="font-thin">
          Twój wynik
        </Typography>
        <Typography className="font-bold">{quizResult} pkt</Typography>
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
            {quizRoute.map((quizAnswer) => (
              <div
                className={`w-[25px] h-[25px] rounded-sm shadow-sm ${quizAnswer.questionResult === "correct" ? "bg-green-500" : "bg-red-500"}`}
              />
            ))}
          </div>
        </div>
      </section>
      <Button>Zagraj jeszcze raz</Button>
    </main>
  );
};
