import { memo, useState } from "react";
import { ModeChoice } from "@quiz/components/ModeChoice";
import Button from "@quiz/components/Button";
import { StartViewHeader } from "@quiz/components/StartViewHeader";
import type { Mode } from "@quiz/types/quiz";

const modeChoices = [
  { key: "10-questions", label: "10 pytan" },
  { key: "30-questions", label: "30 pytań" },
  { key: "50-questions", label: "50 pytań" },
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
    <main className="flex flex-col items-center gap-y-8 w-screen">
      <MemoizedStartViewHeader />
      <ModeChoice
        selected={selectedMode}
        modeChoices={modeChoices}
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
