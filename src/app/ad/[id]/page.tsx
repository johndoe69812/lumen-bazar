import AdGallery from "@/app/modules/ads/ad-gallery/ad-gallery";
import AdPagination from "@/app/modules/ads/ad-breadcrumbs";
import Button from "@/shared/components/button";
import Price from "@/shared/components/price";
import { Metadata } from "next";
import AdBreadcrumbs from "@/app/modules/ads/ad-breadcrumbs";

export const metadata: Metadata = {
  title: "Aj1 k8 NB300 new in stock Address/Region | Transport | Lumen Bazar",
};

const Data = {
  ad: {
    id: "",
    title: "Aj1 k8 NB300 new in stock",
    fields: [
      {
        type: "features",
        value: [
          {
            key: "Brand",
            value: "AJS",
          },
          { key: "model", value: "TN25 250" },
          { key: "Country of origin of the brand", value: "UK" },
          { key: "Year of manufacture", value: "2023" },
          { key: "Mileage", value: "1 km" },
          { key: "Type", value: "Enduro" },
          { key: "Engine type", value: "Gasoline" },
          { key: "Power", value: "30 HP" },
          { key: "Engine capacity", value: "300cm³" },
          { key: "Fuel supply", value: "Carburetor" },
          { key: "Drive type", value: "Chain" },
          { key: "Number of bars", value: "4" },
          { key: "Gearbox", value: "Manual" },
          { key: "Number of gears", value: "6" },
          { key: "Cylinder arrangement", value: "V-shaped" },
          { key: "Cooling", value: "Liquid" },
          { key: "Condition", value: "Used" },
          { key: "PTS", value: "No" },
          { key: "Availability", value: "In stock" },
          { key: "Additional options", value: "Electric starter" },
        ],
      },
      {
        type: "description",
        value: `In stock AJ1 K8 NB300 in stock) no need to wait like everyone else!!!!!!!!!!! 🎉🎉🎉
Top 1 among the Chinese, it won’t be better on a 174 motor!
ZL Card pendant
Ice headlight top 💯
Every detail from the company AJ1 means TOP✅
Hand protection
Motorcycle watch
Motorcycle You don’t even need to describe everything, you can see it all✅✅✅✅
There are also cheaper models...
For more information, call!
We are bringing the best Chinese equipment ✅✅`,
      },
    ],
    breadcrumbs: [
      { slug: "home", title: "Home", link: "/" },
      { slug: "vehicle", title: "Vehicle", link: "/vehicle" },
      { slug: "motorcycles", title: "Motorcycles", link: "/motorcycles" },
      {
        slug: "under_30cc",
        title: "Under 30 cubic centimetres",
        link: "/under_30cc",
      },
    ],
    gallery: [
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/900/300?random=1",
        thumbUrl: "https://picsum.photos/300/100?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/300/400?random=1",
        thumbUrl: "https://picsum.photos/300/400?random=1",
      },
      {
        title: "Product Image #1",
        imageUrl: "https://picsum.photos/400/300?random=1",
        thumbUrl: "https://picsum.photos/100/100?random=1",
      },
    ],
    price: {
      currency: "₸",
      value: 15123129.75,
    },
    address: {
      country: "",
      city: "",
      street: "",
    },
    dateCreated: "",
    totalViews: {
      views: 3_000,
      todayViews: 300,
    },
  },
};

const AdPage = () => {
  return (
    <div className="grid grid-cols-10 gap-2">
      <div className="col-span-8">
        <AdBreadcrumbs breadcrumbs={Data.ad.breadcrumbs} />
        <div className="grid grid-cols-10 gap-10 mt-4">
          <div className="col-span-6">
            <h1 className="text-3xl font-bold">{Data.ad.title}</h1>
            <AdGallery images={Data.ad.gallery} />
            {Data.ad.fields.map((field) => {
              if (field.type === "description") {
                return (
                  <div className="my-5 border-t py-2">
                    <h3 className="mb-1 text-2xl">Description</h3>
                    <p className="text-md whitespace-pre">
                      {field.value as string}
                    </p>
                  </div>
                );
              }

              if (field.type === "features") {
                return (
                  <div className="mt-5 mb-5 border-t py-2">
                    <h3 className="mb-1 text-2xl">Features</h3>
                    <div className="columns-2">
                      {(field.value as { key: string; value: string }[]).map(
                        ({ key, value }) => {
                          return (
                            <div key={key} className="flex gap-1 text-zinc-400">
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
              <Price
                className="text-3xl font-bold"
                value={Data.ad.price.value}
                currency={Data.ad.price.currency}
              />
              <div className="flex flex-col gap-2">
                <Button className="w-full h-16 rounded-md transition font-medium text-white bg-green-400 hover:bg-green-500">
                  Reveal phone number
                </Button>
                <Button className="w-full h-16 rounded-md transition font-medium text-white bg-blue-400 hover:bg-blue-500">
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
