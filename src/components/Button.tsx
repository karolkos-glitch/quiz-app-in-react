export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: "solid" | "questionable" | "outlined";
};

// styles from designer: "bg-gray-300 text-gray-500 cursor-not-allowed";

export const Button = ({
  children = null,
  variant = "solid",
  ...htmlButtonProps
}: ButtonProps) => {
  const classNameValue = getClassNameValuesBySpecificVariant(variant);

  return (
    <button
      {...htmlButtonProps}
      className={`border-2 text-2xl rounded-md px-4 w-64 py-2 transition font-light ${classNameValue}`}
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
      return "bg-white border-primary-500 text-primary-500 hover:bg-primary-100";
  }
};
