import Button from "@quiz/components/Button";

import type { ButtonProps } from "@quiz/components/Button/Button";
import Typography from "@quiz/components/Typography";
import type { Mode } from "@quiz/types/quiz";
import { Choices } from "./Choices";

type ModeChoiceProps = {
  modeChoices: Mode[];
  selected: Mode | null;
  onChoice: (mode: Mode) => void;
};

export const ModeChoice = ({
  onChoice,
  modeChoices,
  selected,
}: ModeChoiceProps) => {
  return (
    <Choices
      label="Wybierz tryb gry"
      choices={modeChoices}
      selected={selected}
      onChoice={onChoice}
    />
  );
};
