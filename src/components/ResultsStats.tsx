import { Typography } from "@quiz/components/Typography";

type ResultsStatsProps = {
  quizCorrectAnswers: number;
  quizFalseAnswers: number;
  quizSkippedAnswers: number;
};

export const ResultsStats = ({
  quizCorrectAnswers,
  quizFalseAnswers,
  quizSkippedAnswers,
}: ResultsStatsProps) => {
  return (
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
  );
};
