export type Image = {
  type: 'image';
  thumbUrl: string;
  imageUrl: string;
  title?: string;
  caption?: string;
};

export type Video = {
  type: 'video';
  videoUrl: string;
  title?: string;
  caption?: string;
};

export type MediaItem = Video | Image;

export type AdGallery = MediaItem[];

export interface Currency {
  sign: string;
  title: string;
  code: string;
}

export interface Price {
  currency: Currency;
  value: number;
  unit: string;
}

export interface AdItemModel {
  id: number;
  title: string;
  alias: string;
  description: string;
  category: {
    id: number;
    title: string;
  };
  inStock: number;
  price: Price;
}
