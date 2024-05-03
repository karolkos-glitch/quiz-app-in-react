import { Mode, Quiz } from "./types";

export const createQuizInstance = async (mode: Mode): Promise<Quiz> => {
  return {
    mode: mode,
    questions: await createQuestionsForInstance(mode.questionCount),
  };
};

const createQuestionsForInstance = async (
  questionCount: number,
): Promise<Quiz["questions"]> => {
  const { questions: parsedQuestions } = await import("./data.json");
  let questions: Quiz["questions"] = [];
  for (let i = 0; i < questionCount; i++) {
    const questionCandidate = parsedQuestions.at(i);
    if (!questionCandidate) break;
    questions.push({
      content: questionCandidate,
      result: null,
    });
  }

  return questions;
};
