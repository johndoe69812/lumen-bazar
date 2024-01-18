import { HTMLAttributes } from "react";
import styles from "./loader.module.css";
import clsx from "clsx";

type Props = HTMLAttributes<HTMLDivElement>;

const Loader = (props: Props) => {
  const { className, ...rest } = props;

  return <div className={clsx(styles.loader, className)} {...rest} />;
};

export default Loader;
