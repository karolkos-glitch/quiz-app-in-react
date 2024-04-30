import Button from "@quiz/components/Button";

type ModeChoiceProps<T> = {
  modeChoices: T[];
  onChoice: (mode: T) => void;
};

export const ModeChoice = <T extends { label: string }>({
  onChoice,
  modeChoices,
}: ModeChoiceProps<T>) => {
  return (
    <div className="flex flex-col">
      {modeChoices.map((mode) => (
        <Button key={mode.label} onClick={() => onChoice(mode)}>
          {mode.label}
        </Button>
      ))}
    </div>
  );
};
