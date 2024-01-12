import { HTMLAttributes } from "react";
import NextLink from "next/link";
import clsx from "clsx";

type Props = HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  isExternal?: boolean;
};

const Link = (props: Props) => {
  const { isExternal, children, className, ...rest } = props;

  const classNames = clsx("hover:text-red-500", className);

  if (isExternal) {
    return (
      <a className={classNames} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink className={classNames} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;
