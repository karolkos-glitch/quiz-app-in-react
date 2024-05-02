import { useState } from "react";
import type { QuestionAnswer, Quiz } from "./types";

export const useInGameQuiz = (
  initialGameQuiz: Quiz,
  endGame: (quiz: Quiz) => void
) => {
  const [quiz, setQuiz] = useState(initialGameQuiz);
  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion = quiz.questions.at(questionIndex);

  const nextQuestion = () => {
    if (questionIndex < quiz.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      return;
    }
    endGame(quiz);
  };

  const onAnswer = (answer: QuestionAnswer) => {
    setQuiz(() => {
      const newQuiz = { ...quiz };
      newQuiz.questions[questionIndex].result =
        answer.key === newQuiz.questions[questionIndex].content.correctAnswer
          ? "correct"
          : "false";

      return newQuiz;
    });
    nextQuestion();
  };

  const onSkip = () => {
    setQuiz(() => {
      const newQuiz = { ...quiz };
      newQuiz.questions[questionIndex].result = "skipped";
      return newQuiz;
    });
    nextQuestion();
  };

  return {
    questionIndex,
    currentQuestion,
    actions: {
      onAnswer,
      onSkip,
    },
  };
};
