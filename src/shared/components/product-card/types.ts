type ViewVariant = "grid-view" | "list-view";

export type Props = {
  title: string;
  images: string[];
  price: string;
  address: string;
  date: string;
  isFavorite?: boolean;
  variant?: ViewVariant;
};
