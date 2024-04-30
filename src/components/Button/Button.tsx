export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: "solid" | "questionable" | "outlined";
};

export const Button = ({
  children = null,
  variant = "solid",
  ...htmlButtonProps
}: ButtonProps) => {
  const classNameValue = getClassNameValuesBySpecificVariant(
    variant,
    htmlButtonProps.disabled
  );

  return (
    <button
      {...htmlButtonProps}
      className={`border-2 rounded-md px-4 py-2 transition ${classNameValue} :disabled:bg-slate-800 :disabled-text-white`}
    >
      {children}
    </button>
  );
};

const getClassNameValuesBySpecificVariant = (
  variant: ButtonProps["variant"],
  disabled = false
) => {
  if (disabled) return "bg-slate-400 text-white";
  switch (variant) {
    case "solid":
      return "bg-primary-500 text-white hover:bg-primary-600";
    case "questionable":
      return "bg-primary-300 text-white hover:bg-primary-400";
    case "outlined":
      return "bg-white border-primary-800 text-primary-800 hover:bg-primary-100";
  }
};
