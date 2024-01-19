export type Price = {
  currency: {
    sign: string;
    title: string;
    code: string;
  };
  value: number;
  unit?: string;
};

export type BreadCrumb = {
  slug: string;
  title: string;
  link: string;
};

export type Image = {
  type: "image";
  thumbUrl: string;
  imageUrl: string;
  title?: string;
  caption?: string;
};

export type Video = {
  type: "video";
  videoUrl: string;
  title?: string;
  caption?: string;
};

export type MediaItem = Video | Image;

export type AdGallery = MediaItem[];

export type Field = {
  type: string;
  value: unknown;
};

export type BaseAd = {
  id: string;
  title: string;
  price: Price;
  address: {
    country: string;
    city: string;
    street?: string;
    postal?: string;
  };
  date: string;
  isFavorite: boolean;
  dateCreated: string;
  gallery: AdGallery;
  isAvailable?: boolean;
  isSoldOut?: boolean;
};

export type FullAd = BaseAd & {
  views: {
    total: number;
    today: number;
  };
  breadcrumbs: BreadCrumb[];
  fields: Field[];
  radius?: number; // In Meters
};
