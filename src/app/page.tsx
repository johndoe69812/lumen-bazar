import Container from "@/shared/components/container";
import FavoriteCard from "@/shared/components/favorite-card";
import Header from "@/shared/components/header";
import ProductCard from "@/shared/components/product-card";
import ProductCategories from "@/shared/components/product-categories";
import ProductsSection from "@/shared/components/products-section";
import StoriesLoading from "@/shared/widgets/stories/stories.loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";

const generateStories = () => {
  return Array(10)
    .fill(0)
    .map((_, storyIndex) => {
      return {
        id: `story-${storyIndex}`,
        title: `Story - ${storyIndex}`,
        thumbImage: `${process.env.NEXT_PUBLIC_HOSTNAME}/story-1.jpg`,
        slides: Array(2)
          .fill(0)
          .map((_, slideIndex) => {
            return {
              id: `Slide - ${slideIndex}`,
              image: `${process.env.NEXT_PUBLIC_HOSTNAME}/story-1-img.png`,
              description: `Slide from story ${storyIndex}`,
              title: `My Story Slide #${slideIndex}`,
              background: "white",
              link: {
                title: "My Link",
                url: "url",
              },
            };
          }),
      };
    });
};

export const metadata: Metadata = {
  title: "Lumen Bazar - Best Worldwide Marketplace!",
};

// TODO: placeholded stuff
const titles = [
  "12 room fancy house",
  "3-bed cozzy super fancy 2 floors special house",
];

const DynamicStories = dynamic(() => import("@/shared/widgets/stories"), {
  loading: () => <StoriesLoading />,
  ssr: false,
});

const placeholdedStories = generateStories();

const Home = () => {
  return (
    <div>
      <Header />
      <div className="relative" id="main">
        <Container>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4">
              <ProductCategories />
              <DynamicStories list={placeholdedStories} />
              <ProductsSection title="Special offers">
                <div className="grid grid-cols-4 gap-2 gap-y-4">
                  {Array(30)
                    .fill(0)
                    .map((_, index) => (
                      <Link key={index} href="/ad/sample-ad">
                        <ProductCard
                          title={titles[Math.random() > 0.5 ? 0 : 1]}
                          price="15$ per night"
                          address="aaa"
                          date="Today"
                          className="!pt-0 !px-0"
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
                      </Link>
                    ))}
                </div>
              </ProductsSection>
            </div>
            <div className="col-span-2">
              <div>
                <h3 className="font-semibold">Favorites</h3>
                <div className="">
                  <FavoriteCard
                    image="https://picsum.photos/400/300?random=1"
                    link="/"
                    title="Software Engineer"
                    price="5000 usd"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
