import Container from "@/shared/components/container";
import Header from "@/shared/components/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="relative" id="main">
        <Container>{children}</Container>
      </div>
    </div>
  );
}
