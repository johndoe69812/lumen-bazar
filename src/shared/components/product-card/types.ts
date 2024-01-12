import { HTMLAttributes } from "react";

type ViewVariant = "grid-view" | "list-view";

export type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  images: string[];
  price: string;
  address: string;
  date: string;
  isFavorite?: boolean;
  disableRoundImage?: boolean;
  variant?: ViewVariant;
};
