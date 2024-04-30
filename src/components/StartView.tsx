import { useState } from "react";
import { ModeChoice } from "./ModeChoice";
import Button from "./Button";

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
  return (
    <main className="flex flex-col items-center gap-y-8 w-screen">
      <header className="text-center text-primary-300">
        <h1 className="text-3xl">Quiz o:</h1>
        <figure>the Office</figure>
      </header>
      <ModeChoice
        selected={selectedMode}
        modeChoices={modeChoices}
        onChoice={chooseMode}
      />
      <div className="w-[75%] flex flex-col justify-center items-center">
        <Button>Start</Button>
      </div>
    </main>
  );
};
