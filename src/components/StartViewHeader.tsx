import { Typography } from "@quiz/components/Typography";

export const StartViewHeader = () => {
  return (
    <>
      <header className="px-4 sm:hidden">
        <Typography as="h1" className="text-3xl text-cente">
          Quiz o:
        </Typography>
        <figure>
          <img src="/the-office-logo.jpeg" alt="Logo the office" width={200} />
        </figure>
      </header>
      <header className="px-4 hidden sm:flex flex-col">
        <Typography as="h1" className="text-7xl">
          Quiz
        </Typography>
        <div className="flex items-center gap-x-4">
          <Typography variant="secondary" className="text-4xl font-light">
            Jak dobrze znasz serial
          </Typography>
          <figure>
            <img src="/the-office-logo.jpeg" alt="Logo the office" width={400} />
          </figure>
        </div>
      </header>
    </>
  );
};
