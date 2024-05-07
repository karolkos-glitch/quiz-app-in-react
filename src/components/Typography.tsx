type TypographyProps = React.HTMLAttributes<HTMLSpanElement> & {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white" | "green";
  debug?: boolean;
};

export const Typography = ({
  as = "span",
  children,
  variant = "primary",
  debug = false,
  ...htmlAttributes
}: TypographyProps) => {
  const Element = as;
  const classNameValue = `${htmlAttributes.className} ${getClassNameValuesBySpecificVariant(variant)}  ${debug ? "border-2 border-red-900" : ""} `;
  return (
    <Element {...htmlAttributes} className={classNameValue}>
      {children}
    </Element>
  );
};

const getClassNameValuesBySpecificVariant = (
  variant: TypographyProps["variant"]
) => {
  switch (variant) {
    case "white":
      return "text-white";
    case "secondary":
      return "text-typo-300";
    case "primary":
      return "text-primary-300";
    case "green":
      return "text-green-500";
  }
};
