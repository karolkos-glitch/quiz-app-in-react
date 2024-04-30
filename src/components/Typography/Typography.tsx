type TypographyProps = {
  as: React.ElementType;
  children: React.ReactNode;
};
export const Typography = ({ as = "span", children }: TypographyProps) => {
  const Element = as;
  return <Element clasName="">{children}</Element>;
};
