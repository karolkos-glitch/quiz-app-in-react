import { type ButtonProps, Button } from "@quiz/components/Button";
import { Typography } from "@quiz/components/Typography";

type ChoicesProps<T> = {
  choices: T[];
  label: string;
  selected?: T | null;
  onChoice?: (choice: T) => void;
};

export const Choices = <T extends { label: string; key: string }>({
  onChoice = () => null,
  choices,
  selected = null,
  label,
}: ChoicesProps<T>) => {
  return (
    <div className="flex flex-col w-[75%] gap-y-4">
      <Typography
        variant="secondary"
        className="text-3xl text-center font-light"
      >
        {label}
      </Typography>
      <div className="grid justify-center gap-2 sm:grid-flow-col sm:grid-rows-2">
        {choices.map((choice) => (
          <Button
            type="button"
            key={choice.key}
            onClick={() => onChoice(choice)}
            variant={getButtonVariant(selected, choice)}
          >
            {choice.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

const getButtonVariant = <T extends { key: string }>(
  selectedMode: T | null,
  modeFromChoices: T
): ButtonProps["variant"] => {
  if (!selectedMode) return "questionable";
  return selectedMode.key === modeFromChoices.key ? "solid" : "questionable";
};
