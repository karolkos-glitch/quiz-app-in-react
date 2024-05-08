import { type ButtonProps, Button } from "@quiz/components/Button";
import { Typography } from "@quiz/components/Typography";

type ChoicesProps<T> = {
  choices: T[];
  label: string;
  selected?: T | null;
  onChoice?: (choice: T) => void;
  variant?: "inline" | "grid";
};

export const Choices = <T extends { label: string; key: string }>({
  onChoice = () => null,
  choices,
  selected = null,
  variant = "inline",
  label,
}: ChoicesProps<T>) => {
  const choicesWrapperClassValueMap: Record<
    NonNullable<ChoicesProps<T>["variant"]>,
    string
  > = {
    inline: "flex flex-col justify-center gap-2 sm:flex-row",
    grid: "grid justify-center gap-2 sm:grid-flow-col sm:grid-rows-2",
  };
  return (
    <div className="flex flex-col w-[75%] gap-y-4">
      <Typography
        variant="secondary"
        className="text-3xl text-center font-light"
      >
        {label}
      </Typography>
      <div className={choicesWrapperClassValueMap[variant]}>
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
