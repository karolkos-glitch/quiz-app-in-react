import { useEffect, useState, useTransition } from "react";

export const useTimeRemaining = (
  initialTimeRemainingValue: number,
  onTimeEnd: () => void,
) => {
  const [_, startTimeRemainingTransition] = useTransition();
  const [timeRemaining, setTimeRemaining] = useState(initialTimeRemainingValue);
  const resetTimeRemaining = () =>
    startTimeRemainingTransition(() =>
      setTimeRemaining(initialTimeRemainingValue),
    );

  useEffect(() => {
    const interval = setInterval(() => {
      startTimeRemainingTransition(() =>
        setTimeRemaining((value) => value - 1),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [timeRemaining]);

  useEffect(() => {
    if (timeRemaining < 0) {
      onTimeEnd();
      resetTimeRemaining();
    }
  }, [timeRemaining]);

  return { timeRemaining, resetTimeRemaining };
};
