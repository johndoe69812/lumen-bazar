import { PropsWithChildren } from "react";
import Sidebar from "./components/sidebar";

import "./main.css";

const AdminLayout = async (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div className="w-full h-full grid grid-cols-[250px_1fr] bg-indigo-50">
      <Sidebar />
      <main className="py-2 px-6">{children}</main>
    </div>
  );
};

export default AdminLayout;
