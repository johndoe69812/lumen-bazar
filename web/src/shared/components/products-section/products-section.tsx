import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const ProductsSection = ({ title, description, children, ...rest }: Props) => {
  return (
    <div {...rest}>
      {title && <h3 className="text-2xl font-semibold mt-10 mb-2">{title}</h3>}
      {description && <p>{description}</p>}
      <div>{children}</div>
    </div>
  );
};

export default ProductsSection;
