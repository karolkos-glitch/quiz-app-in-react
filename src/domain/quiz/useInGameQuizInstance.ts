import { useState, useTransition } from "react";
import type { QuestionAnswer, Quiz } from "./types";

export const useInGameQuizInstance = (
  initialGameQuiz: Quiz,
  endGame: (quiz: Quiz) => void
) => {
  const [loadingNextQuestion, startTransitionToNextQuestion] = useTransition();
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
    nextQuestion();
    startTransitionToNextQuestion(() => {
      setQuiz(() => {
        const newQuiz = { ...quiz };
        newQuiz.questions[questionIndex].result =
          answer.key === newQuiz.questions[questionIndex].content.correctAnswer
            ? "correct"
            : "false";

        return newQuiz;
      });
    });
  };

  const onSkip = () => {
    nextQuestion();
    startTransitionToNextQuestion(() => {
      setQuiz(() => {
        const newQuiz = { ...quiz };
        newQuiz.questions[questionIndex].result = "skipped";
        return newQuiz;
      });
    });
  };

  return {
    questionIndex,
    currentQuestion,
    loadingNextQuestion,
    actions: {
      onAnswer,
      onSkip,
    },
  };
};
