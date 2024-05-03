import { AppearenceTransition } from "@quiz/components/AppearenceTransition";
import { Typography } from "@quiz/components/Typography";
import { lazy, Suspense } from "react";

const StartView = lazy(() =>
  import("@quiz/components/StartView").then((module) => ({
    default: module.StartView,
  })),
);

export default function Start() {
  return (
    <Suspense
      fallback={
        <main className="flex flex-col my-4">
          <Typography variant="primary" className="text-center">
            Poczekaj chwilkę...
          </Typography>
        </main>
      }
    >
      <AppearenceTransition>
        <StartView />
      </AppearenceTransition>
    </Suspense>
  );
}
