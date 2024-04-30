import { useState } from "react";
import { ModeChoice } from "./ModeChoice";
import Button from "./Button";
import Typography from "./Typography";

export type Mode = { label: string };
const modeChoices = [
  { label: "10 pytan" },
  { label: "30 pytań" },
  { label: "50 pytań" },
] satisfies Mode[];

const startGame = (mode: Mode) => {
  console.debug(mode);
};

export const StartView = () => {
  const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
  const chooseMode = (mode: Mode) => setSelectedMode(mode);
  const handleStart = () => {
    if (!selectedMode) return;
    startGame(selectedMode);
  };

  return (
    <main className="flex flex-col items-center gap-y-8 w-screen">
      <header className="sm:hidden">
        <Typography as="h1" className="text-3xl text-cente">
          Quiz o:
        </Typography>
        <figure>the Office</figure>
      </header>
      <header className="hidden sm:flex flex-col">
        <Typography as="h1" className="text-7xl">
          Quiz
        </Typography>
        <div className="flex items-center gap-x-4">
          <Typography variant="secondary" className="text-4xl">
            Jak dobrze znasz serial
          </Typography>
          <figure>the Office</figure>
        </div>
      </header>
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
