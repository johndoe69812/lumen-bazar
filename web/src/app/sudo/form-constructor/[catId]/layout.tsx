import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build your form",
  description: "Build your form",
};

export default function FormBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
