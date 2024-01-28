"use client";

import clsx from "clsx";
import { useState } from "react";
import { MAX_IMAGES_PER_GALLERY } from "./constants";
import { Image, Video, MediaItem } from "@/types";

type Props = {
  gallery: MediaItem[];
};

const ProductCardGallery = ({ gallery }: Props) => {
  const [currImageIndex, setCurrImageIndex] = useState(0);

  const actualLength = gallery.length;
  const displayLength = Math.min(MAX_IMAGES_PER_GALLERY, actualLength);
  const showTotalImages = actualLength > displayLength;
  const currentMedia = gallery[currImageIndex];

  return (
    <div
      className={clsx("w-full overflow-hidden relative")}
      onMouseLeave={() => setCurrImageIndex(0)}
    >
      <img
        className="w-full h-[150px] object-cover"
        src={
          currentMedia.type === "image"
            ? (currentMedia as Image).thumbUrl
            : (currentMedia as Video).videoUrl
        }
        alt={currentMedia.title}
      />
      {gallery.length > 1 && (
        <div className="absolute top-0 w-full h-full p-2 flex gap-0.5 opacity-0 hover:opacity-100 transition-opacity">
          {Array(displayLength)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="h-full w-full flex items-end"
                onMouseEnter={() => setCurrImageIndex(index)}
              >
                <div
                  className={clsx(
                    "h-0.5 w-full",
                    currImageIndex === index ? "bg-blue-400" : "bg-white"
                  )}
                />
              </div>
            ))}
        </div>
      )}
      {currImageIndex === displayLength - 1 && showTotalImages && (
        <div className="absolute pointer-events-none top-0 w-full h-full flex justify-center items-center bg-slate-900/30">
          <span className="text-white">
            {actualLength - displayLength} images more
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductCardGallery;
