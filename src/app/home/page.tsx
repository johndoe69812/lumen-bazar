import Container from "@/shared/components/container";
import Header from "@/shared/components/header";
import ProductCard from "@/shared/components/product-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
};

// TODO: placeholded stuff
const titles = [
  "12 room fancy house",
  "3-bed cozzy super fancy 2 floors special house",
];

const Home = () => {
  return (
    <div>
      <Header />
      <Container className="mt-10">
        <div className="grid grid-cols-4 gap-y-4 max-w-screen-lg">
          {Array(30)
            .fill(0)
            .map(() => (
              <ProductCard
                title={titles[Math.random() > 0.5 ? 0 : 1]}
                price="15$ per night"
                address="aaa"
                date="Today"
                isFavorite={Math.random() > 0.5}
                images={[
                  "https://picsum.photos/400/300?random=1",
                  "https://picsum.photos/400/300?random=2",
                  "https://picsum.photos/400/300?random=3",
                  "https://picsum.photos/400/300?random=4",
                  "https://picsum.photos/400/300?random=5",
                  "https://picsum.photos/400/300?random=6",
                  "https://picsum.photos/400/300?random=7",
                  "https://picsum.photos/400/300?random=8",
                ]}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
