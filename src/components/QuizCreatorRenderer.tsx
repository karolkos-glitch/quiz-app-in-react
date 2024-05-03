import { createQuizInstance } from "@quiz/domain/quiz/createQuizInstance";
import type { Mode, Quiz } from "@quiz/domain/quiz/types";
import { useEffect, useState } from "react";
import { QuizQuestionSkeleton } from "@quiz/components/QuizQuestionSkeleton";
import { Typography } from "@quiz/components/Typography";
import { AppearenceTransition } from "@quiz/components/AppearenceTransition";

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

  if (!quizInstance)
    return (
      <AppearenceTransition
        as="main"
        className="flex flex-col justify-center items-center gap-y-4 my-4 sm:h-screen"
      >
        <Typography as="h1" className="animate-pulse">
          Tworzenie quizu...
        </Typography>
        <QuizQuestionSkeleton />
      </AppearenceTransition>
    );

  return <AppearenceTransition>{children(quizInstance)}</AppearenceTransition>;
};
