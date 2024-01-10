import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={clsx("container mx-auto", className)}
      style={{ maxWidth: 1350 }}
    >
      {children}
    </div>
  );
};

export default Container;
