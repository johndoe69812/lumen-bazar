import Container from "@/shared/components/container";
import Header from "@/shared/components/header";
import ProductCard from "@/shared/components/product-card";
import ProductCategories from "@/shared/components/product-categories";
import ProductsSection from "@/shared/components/products-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumen Bazar - Best Worldwide Marketplace!",
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
      <div className="relative" id="main">
        <Container>
          <div className="grid grid-cols-6">
            <div className="col-span-4">
              <ProductCategories />
              <ProductsSection title="Special offers">
                <div className="grid grid-cols-4 gap-2 gap-y-4">
                  {Array(30)
                    .fill(0)
                    .map((_, index) => (
                      <ProductCard
                        key={index}
                        title={titles[Math.random() > 0.5 ? 0 : 1]}
                        price="15$ per night"
                        address="aaa"
                        date="Today"
                        className="!p-0"
                        isFavorite={Math.random() > 0.5}
                        disableRoundImage
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
              </ProductsSection>
            </div>
            <div className="col-span-2">Sidebar Widgets</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
