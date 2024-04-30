export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
      return "bg-primary-500 text-white hover:bg-primary-600";
    case "questionable":
      return "bg-primary-300 text-white hover:bg-primary-400";
    case "outlined":
      return "bg-white border-primary-800 text-primary-800 hover:bg-primary-100";
  }
};
