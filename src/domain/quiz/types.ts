export type Mode = { key: string; label: string; questionCount: number };

export type QuestionAnswer = { key: string; label: string };

type QuestionImage = {
  src: string;
  alt: string;
  width: number;
  heigth: number;
};

export type InGameQuestion = {
  id: string;
  question: string;
  correctAnswer: string;
  answers: QuestionAnswer[];
  image?: QuestionImage;
};

export type Quiz = {
  mode: Mode;
  questions: Array<{
    content: InGameQuestion;
    result: QuestionResult | null;
  }>;
};

export type QuizResults = {
  answerStatistic: {
    correct: number;
    false: number;
    skipped: number;
  };
  route: Array<{ id: string; questionResult: QuestionResult }>;
};

export type QuestionResult = "skipped" | "correct" | "false";
