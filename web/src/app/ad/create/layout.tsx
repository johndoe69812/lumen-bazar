import Container from "@/shared/components/container";
import TopHeader from "@/shared/components/header/top-header";

export default function CreateAdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopHeader />
      <div className="relative" id="main">
        <Container>{children}</Container>
      </div>
    </div>
  );
}
