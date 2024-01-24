import { IoHeartOutline } from "@react-icons/all-files/io5/IoHeartOutline";
import { IoHeartSharp } from "@react-icons/all-files/io5/IoHeartSharp";
import AdGallery from "@/modules/ads/ad-gallery/ad-gallery";
import AdBreadcrumbs from "@/modules/ads/ad-breadcrumbs";
import Button from "@/shared/components/button";
import Price from "@/shared/components/price";
import { Metadata } from "next";
import { generateFullAd } from "@/mock-data/ads/generate-ads";

export const metadata: Metadata = {
  title: "Aj1 k8 NB300 new in stock Address/Region | Transport | Lumen Bazar",
};

const AdPage = () => {
  const ad = generateFullAd();

  return (
    <div className="grid grid-cols-10 gap-2">
      <div className="col-span-8">
        <AdBreadcrumbs breadcrumbs={ad.breadcrumbs} />
        <div className="grid grid-cols-10 gap-10 mt-4">
          <div className="col-span-6">
            <h1 className="text-3xl font-bold">{ad.title}</h1>
            <div className="flex mt-5">
              <Button className="flex items-center gap-2 px-4 leading-8 rounded transition bg-gray-200 hover:bg-gray-300">
                {ad.isFavorite ? (
                  <>
                    <IoHeartOutline />
                    Add to favorite
                  </>
                ) : (
                  <>
                    <IoHeartSharp />
                    In favorite
                  </>
                )}
              </Button>
            </div>
            <AdGallery gallery={ad.gallery} />
            {ad.fields.map((field) => {
              if (field.type === "description") {
                return (
                  <div key="description" className="my-5 border-t py-2">
                    <h3 className="mb-1 text-2xl">Description</h3>
                    <p className="text-md whitespace-pre">
                      {field.value as string}
                    </p>
                  </div>
                );
              }

              if (field.type === "features") {
                return (
                  <div key="features" className="mt-5 mb-5 border-t py-2">
                    <h3 className="mb-1 text-2xl">Features</h3>
                    <div className="columns-2">
                      {(field.value as { key: string; value: string }[]).map(
                        ({ key, value }) => {
                          return (
                            <div key={key} className="flex gap-1 text-zinc-500">
                              <span className="font-medium">{key}</span>:
                              <span className="text-black">{value}</span>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="col-span-4">
            <div className="flex flex-col gap-6 sticky top-[120px]">
              <Price className="text-3xl font-bold" {...ad.price} />
              <div className="flex flex-col gap-2">
                <Button className="w-full h-16 text-lg rounded-md transition font-medium text-white bg-green-400 hover:bg-green-500">
                  Reveal phone number
                </Button>
                <Button className="w-full h-16 text-lg rounded-md transition font-medium text-white bg-blue-400 hover:bg-blue-500">
                  Chat with Seller
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default AdPage;
