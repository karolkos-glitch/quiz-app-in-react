import { AppearenceTransition } from "@quiz/components/AppearenceTransition";
import { InGameQuestion } from "@quiz/domain/quiz/types";

type QuizQuestionViewWrapperProps = {
  question: InGameQuestion;
  children?: React.ReactNode;
};

export const QuizQuestionViewWrapper: React.FC<
  QuizQuestionViewWrapperProps
> = ({ question: { image }, children = null }) => {
  return (
    <AppearenceTransition
      as="div"
      className="flex flex-col gap-y-4 justify-center items-center"
    >
      <AppearenceTransition
        as="div"
        className="flex flex-col gap-y-4 justify-center items-center"
      >
        <figure>
          <img
            className="object-contain"
            src={image?.src ?? "https://picsum.photos/300/200"}
            alt={image?.alt ?? "Lorem ipsum"}
            width={image?.width ?? "300"}
            height={image?.heigth ?? "200"}
          />
        </figure>
        {children}
      </AppearenceTransition>
    </AppearenceTransition>
  );
};
