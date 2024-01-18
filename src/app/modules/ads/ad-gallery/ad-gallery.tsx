"use client";

import { useEffect, useState } from "react";
import { IoChevronBack } from "@react-icons/all-files/io5/IoChevronBack";
import { IoChevronForward } from "@react-icons/all-files/io5/IoChevronForward";
import Button from "@/shared/components/button";
import clsx from "clsx";
import Loader from "@/shared/components/loader";
import Image from "next/image";

type Props = {
  images: {
    title: string;
    imageUrl: string;
    thumbUrl: string;
  }[];
};

const AdGallery = (props: Props) => {
  const { images } = props;

  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const isFirst = currentImage === 0;
  const isLast = currentImage === images.length - 1;

  useEffect(() => {
    setIsLoaded(false);
  }, [currentImage]);

  return (
    <div className="group w-full mt-5">
      <div className="relative flex justify-center items-center h-96 select-none border bg-black">
        {!isFirst && (
          <Button
            className="absolute z-10 top-0 left-0 w-9 h-full flex justify-center items-center text-2xl opacity-0 group-hover:opacity-100 transition text-white hover:bg-neutral-500/75"
            onClick={() => setCurrentImage((p) => p - 1)}
          >
            <IoChevronBack />
          </Button>
        )}
        <div className="w-full h-full flex justify-center items-center mx-auto bg-gray-500">
          {!isLoaded && <Loader />}
          {isLoaded && (
            <div className="absolute inset-0 overflow-hidden">
              <Image
                key={currentImage}
                src={images[currentImage].imageUrl}
                alt={images[currentImage].title}
                className="scale-110 blur-lg brightness-150"
                fill
              />
            </div>
          )}
          <Image
            key={currentImage}
            className={clsx("object-contain", !isLoaded && "opacity-0")}
            onLoad={() => setIsLoaded(true)}
            src={images[currentImage].imageUrl}
            alt={images[currentImage].title}
            fill
          />
        </div>

        {!isLast && (
          <Button
            className="absolute z-10 top-0 right-0 w-9 h-full flex justify-center items-center text-2xl opacity-0 group-hover:opacity-100 transition text-white hover:bg-neutral-500/75"
            onClick={() => setCurrentImage((p) => p + 1)}
          >
            <IoChevronForward />
          </Button>
        )}
      </div>
      <div className="mt-6 w-full">
        <div className="flex flex-wrap gap-2">
          {images.map(({ thumbUrl }, index) => (
            <Button
              key={index}
              className={clsx(
                "relative h-16 min-w-10 border transition hover:ring",
                index === currentImage && "ring"
              )}
              onClick={() => {
                setCurrentImage(index);
              }}
            >
              <img className="h-full" src={thumbUrl} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdGallery;
