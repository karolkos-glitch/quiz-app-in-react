import { Transition } from "@headlessui/react";

export const QuizQuestionSkeleton = () => {
  return (
    <Transition
      as="div"
      appear
      show
      className="flex flex-col items-center justify-center gap-y-4"
    >
      <div className="h-48 w-72 bg-gray-300 animate-pulse"></div>
      <div className="h-12 w-48 sm:w-96 bg-gray-300 rounded-full animate-pulse"></div>
      <div className="flex flex-col sm:flex-row gap-y-2 gap-x-4">
        <div className="h-12 w-48 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-12 w-48 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-12 w-48 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-12 w-48 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </Transition>
  );
  ``;
};
