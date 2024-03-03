"use client";

import clsx from "clsx";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { CiGrid41 } from "@react-icons/all-files/ci/CiGrid41";
import { CiViewTable as ShowAllIcon } from "@react-icons/all-files/ci/CiViewTable";
import { BiCategory } from "@react-icons/all-files/bi/BiCategory";
import { VscTypeHierarchy } from "@react-icons/all-files/vsc/VscTypeHierarchy";
import { usePathname } from "next/navigation";

type Props = ComponentProps<typeof Link> & {
  icon: ReactNode;
  title: string;
  isActive?: boolean;
};

const PageLink = (props: Props) => {
  const { children, icon, title, isActive = false, ...rest } = props;

  return (
    <Link
      className={clsx(
        "w-full flex items-center gap-2 pl-2 leading-10 font-semibold hover:text-blue-600",
        isActive && "bg-blue-50 text-blue-600"
      )}
      {...rest}
    >
      <span className="text-xl">{icon}</span>
      <span>{title}</span>
    </Link>
  );
};

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { title: "Dashboard", href: "/sudo", icon: <CiGrid41 />, isActive: true },
    { title: "Categories", href: "/sudo/categories", icon: <BiCategory /> },
    {
      title: "Advertisement Params",
      href: "/sudo/ad-params",
      icon: <VscTypeHierarchy />,
    },
    {
      title: "All Advertisements",
      href: "/sudo/all-ads",
      icon: <ShowAllIcon />,
    },
  ];

  return (
    <aside className="sticky top-0 h-[100vh] bg-white shadow">
      <nav>
        <ul className="flex flex-col gap-2 py-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <PageLink {...item} isActive={pathname === item.href} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
