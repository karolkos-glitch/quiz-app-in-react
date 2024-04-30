import Typography from "./Typography";

export const StartViewHeader = () => {
  return (
    <>
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
    </>
  );
};
