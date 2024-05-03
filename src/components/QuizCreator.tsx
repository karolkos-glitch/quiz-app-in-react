import { createQuizInstance } from "@quiz/domain/quiz/createQuizInstance";
import type { Mode, Quiz } from "@quiz/domain/quiz/types";
import { useEffect, useState } from "react";

type QuizCreatorProps = {
  mode: Mode;
  children: (quizInstance: Quiz) => React.ReactNode;
};

export const QuizCreatorRenderer = ({ mode, children }: QuizCreatorProps) => {
  const [quizInstance, setQuizInstance] = useState<Quiz | null>(null);
  useEffect(() => {
    const initQuizInstance = async () => {
      const quizInstance = await createQuizInstance(mode);
      setQuizInstance(quizInstance);
    };
    initQuizInstance();
  }, [mode]);

  if (!quizInstance) return <div>Building quiz</div>;

  return children(quizInstance);
};
