import { BaseAd, FullAd, Image } from "@/types";

const PRODUCTS_TITLES = [
  "12 room fancy house",
  "3-bed cozzy super fancy 2 floors special house",
];

const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateImage = (index: number): Image => {
  const size = [
    getRandomIntInclusive(500, 1000),
    getRandomIntInclusive(500, 1000),
  ];
  const thumbSize = size.map((s) => Math.floor(s / 5));

  return {
    type: "image",
    title: `Random Image - ${index}`,
    imageUrl: `https://picsum.photos/${size[0]}/${size[1]}?random=${index}`,
    thumbUrl: `https://picsum.photos/${thumbSize[0]}/${thumbSize[1]}?random=${index}`,
  };
};

export const generateBaseAd = (index: number): BaseAd => {
  return {
    id: `ad-${index}`,
    title: PRODUCTS_TITLES[Math.random() > 0.5 ? 0 : 1],
    price: {
      currency: {
        sign: "$",
        code: "USD",
        title: "United States Dollar",
      },
      value: 1_000.5,
      unit: "per galon",
    },
    address: {
      country: "United States",
      city: "New York",
    },
    date: "Today",
    isFavorite: Math.random() > 0.5,
    gallery: Array(getRandomIntInclusive(5, 15))
      .fill(0)
      .map((_, index): Image => {
        return generateImage(index);
      }),
    dateCreated: "1 January 2024",
  };
};

export const generateAds = async (total: number): Promise<BaseAd[]> => {
  const ads = Array(total)
    .fill(0)
    .map((_, adIndex): BaseAd => {
      return generateBaseAd(adIndex);
    });

  return ads;
};

export const generateFullAd = (): FullAd => {
  const baseAd = generateBaseAd(1);

  return {
    ...baseAd,
    views: {
      total: 10,
      today: 10,
    },
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
  };
};
