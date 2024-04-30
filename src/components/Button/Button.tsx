type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: "solid" | "questionable" | "outlined";
};

export const Button = ({
  children = null,
  variant = "solid",
  ...htmlButtonProps
}: ButtonProps) => {
  const classNameValue = getClassNameValuesBySpecificVariant(variant);

  return (
    <button
      className={`border-2 rounded-md px-4 py-2 transition ${classNameValue} `}
      {...htmlButtonProps}
    >
      {children}
    </button>
  );
};

const getClassNameValuesBySpecificVariant = (
  variant: ButtonProps["variant"]
) => {
  switch (variant) {
    case "solid":
      return "bg-cyan-800 text-white hover:bg-cyan-600";
    case "questionable":
      return "bg-cyan-500 text-white hover:bg-cyan-600";
    case "outlined":
      return "bg-white border-cyan-800 text-cyan-800 hover:bg-cyan-100";
  }
};
