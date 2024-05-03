import { Quiz, QuizResults } from "./types";

export function createQuizResultInstance(quiz: Quiz): QuizResults {
  let correctCount = 0;
  let falseCount = 0;
  let skippedCount = 0;
  let index = 0;
  const route: QuizResults["route"] = [];
  for (const question of quiz.questions) {
    const result = question.result;
    if (result === null) continue;
    if (result === "correct") {
      correctCount++;
    } else if (result === "false") {
      falseCount++;
    } else if (result === "skipped") {
      skippedCount++;
    }
    route.push({ id: String(index++), questionResult: result });
  }

  return {
    answerStatistic: {
      correct: correctCount,
      false: falseCount,
      skipped: skippedCount,
    },
    route,
  };
}
