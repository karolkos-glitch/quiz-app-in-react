import { memo, useState } from "react";
import Button from "@quiz/components/Button";
import { StartViewHeader } from "@quiz/components/StartViewHeader";
import { Choices } from "@quiz/components/Choices";
import { Mode } from "@quiz/domain/quiz/types";

const modeChoices = [
  { key: "10-questions", label: "10 pytan", questionCount: 10 },
  { key: "30-questions", label: "30 pytań", questionCount: 30 },
  { key: "50-questions", label: "50 pytań", questionCount: 50 },
] satisfies Mode[];

const startGame = (mode: Mode) => {
  console.debug(mode);
};

const MemoizedStartViewHeader = memo(StartViewHeader);

export const StartView = () => {
  const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
  const chooseMode = (mode: Mode) => setSelectedMode(mode);
  const handleStart = () => {
    if (!selectedMode) return;
    startGame(selectedMode);
  };

  return (
    <main className="flex flex-col justify-center items-center my-4 sm:h-screen">
      <MemoizedStartViewHeader />
      <Choices
        label="Wybierz tryb gry"
        choices={modeChoices}
        selected={selectedMode}
        onChoice={chooseMode}
      />
      <div className="w-[75%] flex flex-col justify-center items-center">
        <Button type="button" disabled={!selectedMode} onClick={handleStart}>
          Start
        </Button>
      </div>
    </main>
  );
};
