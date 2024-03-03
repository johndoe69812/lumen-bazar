"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "./shared/components/sidebar";

import "./main.css";

const AdminLayout = (props: PropsWithChildren) => {
  const { children } = props;

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-full grid grid-cols-[250px_1fr] bg-indigo-50">
        <Sidebar />
        <main className="pt-6 pb-2 px-6">{children}</main>
      </div>
    </QueryClientProvider>
  );
};

export default AdminLayout;
