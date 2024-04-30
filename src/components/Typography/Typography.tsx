type TypographyProps = React.HTMLAttributes<HTMLSpanElement> & {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white";
};

export const Typography = ({
  as = "span",
  children,
  variant = "primary",
  ...htmlAttributes
}: TypographyProps) => {
  const Element = as;
  const classNameValue = `${getClassNameValuesBySpecificVariant(variant)} ${htmlAttributes.className} `;
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
  }
};
