import Button from "@quiz/components/Button";
import type { Mode } from "./StartView";
import type { ButtonProps } from "./Button/Button";

type ModeChoiceProps<T> = {
  modeChoices: T[];
  selected: T | null;
  onChoice: (mode: T) => void;
};

export const ModeChoice = <T extends { label: string }>({
  onChoice,
  modeChoices,
  selected,
}: ModeChoiceProps<T>) => {
  return (
    <div className="flex flex-col w-[75%] gap-y-4">
      <span className="text-typo-500 text-xl text-center">
        Wybierz tryb gry
      </span>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        {modeChoices.map((mode) => (
          <Button
            key={mode.label}
            onClick={() => onChoice(mode)}
            variant={getButtonVariant(selected, mode)}
          >
            {mode.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

const getButtonVariant = (
  selectedMode: Mode | null,
  modeFromChoices: Mode
): ButtonProps["variant"] => {
  if (!selectedMode) return "questionable";
  return selectedMode.label === modeFromChoices.label
    ? "solid"
    : "questionable";
};
