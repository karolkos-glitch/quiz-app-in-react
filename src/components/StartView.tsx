import { memo, useState } from "react";
import { ModeChoice } from "./ModeChoice";
import Button from "./Button";
import { StartViewHeader } from "./StartViewHeader";

export type Mode = { label: string };
const modeChoices = [
  { label: "10 pytan" },
  { label: "30 pytań" },
  { label: "50 pytań" },
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
