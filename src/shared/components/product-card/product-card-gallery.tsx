"use client";

import clsx from "clsx";
import { useState } from "react";
import { MAX_IMAGES_PER_GALLERY } from "./constants";

type Props = {
  images: string[];
};

const ProductCardGallery = ({ images }: Props) => {
  const [currImageIndex, setCurrImageIndex] = useState(0);

  const actualLength = images.length;
  const displayLength = Math.min(MAX_IMAGES_PER_GALLERY, actualLength);
  const showTotalImages = actualLength > displayLength;

  return (
    <div
      className={clsx("w-full overflow-hidden relative")}
      onMouseLeave={() => setCurrImageIndex(0)}
    >
      <img src={images[currImageIndex]} className="object-cover w-full" />
      {images.length > 1 && (
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
