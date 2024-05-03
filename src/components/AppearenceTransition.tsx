import { Transition } from "@headlessui/react";

type AppearenceTransitionProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  as?: React.ElementType;
};

export const AppearenceTransition = ({
  children,
  as = "div",
  className = "",
  duration = 200,
}: AppearenceTransitionProps) => {
  const enterAndLeaveValue = `transition-opacity duration-${duration}`;
  return (
    <Transition
      as={as}
      className={className}
      appear
      show
      enter={enterAndLeaveValue}
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave={enterAndLeaveValue}
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
};
