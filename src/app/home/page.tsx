import Header from "@/shared/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
};

const Home = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
