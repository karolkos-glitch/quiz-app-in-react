import { memo, useState } from "react";
import Button from "@quiz/components/Button";
import { StartViewHeader } from "@quiz/components/StartViewHeader";
import { Choices } from "@quiz/components/Choices";
import { Mode } from "@quiz/domain/quiz/types";
import { useNavigate } from "react-router-dom";

const modeChoices = [
  { key: "10-questions", label: "10 pytan", questionCount: 10 },
  { key: "30-questions", label: "15 pytań", questionCount: 15 },
  { key: "50-questions", label: "20 pytań", questionCount: 20 },
] satisfies Mode[];

const MemoizedStartViewHeader = memo(StartViewHeader);

export const StartView = () => {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
  const chooseMode = (mode: Mode) => setSelectedMode(mode);
  const startGame = (mode: Mode) => {
    const searchParams = new URLSearchParams({ mode: JSON.stringify(mode) });
    const modeSearchParamsString = searchParams.toString();
    navigate(`/quiz/?${modeSearchParamsString}`);
  };
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
