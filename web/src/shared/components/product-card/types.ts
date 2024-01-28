import { BaseAd } from "@/types";
import { HTMLAttributes } from "react";

type ViewVariant = "grid-view" | "list-view";

export type Props = HTMLAttributes<HTMLDivElement> &
  BaseAd & {
    disableRoundImage?: boolean;
    variant?: ViewVariant;
  };
