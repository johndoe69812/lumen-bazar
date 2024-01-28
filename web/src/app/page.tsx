import { generateAds } from "@/mock-data/ads/generate-ads";
import { generateStories } from "@/mock-data/ads/generate-stories";
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

export const metadata: Metadata = {
  title: "Lumen Bazar - Best Worldwide Marketplace!",
};

const DynamicStories = dynamic(() => import("@/shared/widgets/stories"), {
  loading: () => <StoriesLoading />,
  ssr: false,
});

const Home = async () => {
  const stories = await generateStories(10);
  const ads = await generateAds(30);

  return (
    <div>
      <Header />
      <div className="relative" id="main">
        <Container>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4">
              <ProductCategories />
              <DynamicStories list={stories} />
              <ProductsSection title="Special offers">
                <div className="grid grid-cols-4 gap-2 gap-y-4">
                  {ads.map((ad, index) => (
                    <Link key={index} href="/ad/sample-ad">
                      <ProductCard
                        {...ad}
                        className="!pt-0 !px-0"
                        disableRoundImage
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
