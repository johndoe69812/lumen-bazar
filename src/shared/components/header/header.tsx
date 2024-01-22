"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Container from "../container";
import clsx from "clsx";
import { debounce } from "lodash";
import Image from "next/image";
import { BiCategory } from "@react-icons/all-files/bi/BiCategory";
import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import Button from "@/shared/components/button";
import { CategoriesPopupLoading } from "./categories-popup";
import dynamic from "next/dynamic";
import Link from "next/link";
import LocationModal from "./location-modal";
import TopHeader from "./top-header";

const DynamicCategoriesPopup = dynamic(() => import("./categories-popup"), {
  loading: () => <CategoriesPopupLoading />,
});

const Header = () => {
  const headerRef = useRef(null);
  const [isOnTop, setIsOnTop] = useState(true);
  const [isCategoriesOpened, setIsCategoriesOpened] = useState(false);
  const [isLocationOpened, setIsLocationOpened] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const onTop = document.documentElement.scrollTop === 0;

      onTop && !isOnTop && setIsOnTop(true);
      !onTop && isOnTop && setIsOnTop(false);
    };

    const onScrollDebounced = debounce(onScroll, 15);

    document.addEventListener("scroll", onScrollDebounced);
    onScroll();

    return () => {
      document.removeEventListener("scroll", onScrollDebounced);
    };
  }, [isOnTop]);

  const handleToggleCategories = useCallback(() => {
    setIsCategoriesOpened((prev) => !prev);
  }, []);

  const handleToggleLocation = useCallback(() => {
    setIsLocationOpened((prev) => !prev);
  }, []);

  const handleChangeLocation = useCallback(() => {
    setIsLocationOpened(false);
  }, []);

  return (
    <>
      <TopHeader />
      <header
        ref={headerRef}
        className={clsx(
          "transition-shadow w-full h-24 flex items-center sticky top-0 bg-white justify-items-stretch z-20",
          !isOnTop && !isCategoriesOpened && "shadow-md"
        )}
      >
        <Container className="flex gap-4 justify-around">
          <div className="transition cursor-pointer text-2xl heading-8 font-bold flex items-center hover:sepia">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Lumen Bazar Logo"
                width={152.5}
                height={25}
                priority
              />
            </Link>
          </div>
          <div className="flex grow gap-2">
            <Button
              className={clsx(
                "flex items-center gap-1 bg-blue-400 text-white px-3 leading-8 rounded-lg hover:bg-blue-500 focus-visible:ring-2",
                isCategoriesOpened && "ring-2"
              )}
              title="Open Categories"
              onClick={handleToggleCategories}
            >
              {isCategoriesOpened ? <IoClose /> : <BiCategory />}
              All categories
            </Button>
            <div className="leading-8 rounded overflow-hidden bg-blue-400 p-0.5 flex grow">
              <input
                className="border rounded pl-2 w-full"
                placeholder="Search ads"
              />
              <Button className="px-5 text-white hover:bg-blue-500 focus-visible:ring-2">
                Find
              </Button>
            </div>
          </div>
          <Button
            className="flex items-center gap-1 mr-10 hover:text-red-500 focus-visible:text-red-500"
            title="Specify Location"
            onClick={handleToggleLocation}
          >
            <IoLocationOutline />
            Anywhere
          </Button>
        </Container>
      </header>
      {isCategoriesOpened && (
        <DynamicCategoriesPopup onClose={handleToggleCategories} />
      )}
      {isLocationOpened && (
        <LocationModal
          onClose={handleToggleLocation}
          onSave={handleChangeLocation}
        />
      )}
    </>
  );
};

export default Header;
