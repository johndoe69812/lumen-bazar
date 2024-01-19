import { IoChevronForward } from "@react-icons/all-files/io5/IoChevronForward";
import Image from "next/image";
import Link from "@/shared/components/link";
import Modal from "@/shared/components/modal";
import { HTMLAttributes, useState } from "react";
import { ALL_CATEGORIES } from "@/mock-data/categories";
import clsx from "clsx";

const DEFAULT_CATEGORY_ID = "vehicles";

type Props = HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
};

const CategoriesPopup = ({ onClose }: Props) => {
  const [selectedCategoryId, setSelectedCategoryId] =
    useState(DEFAULT_CATEGORY_ID);

  return (
    <Modal className="top-24" onClose={onClose}>
      <div className="h-[65vh] 2xl:w-[1440px] z-10 rounded-b-3xl grid grid-cols-12 py-6 pl-16 overflow-hidden bg-white">
        <div className="relative col-span-3 h-full overflow-y-auto">
          <ul>
            {Object.keys(ALL_CATEGORIES).map((catId) => (
              <li
                key={catId}
                data-category={catId}
                className={clsx(
                  "relative z-10 py-2 pl-2 pr-4 flex items-center justify-between rounded cursor-pointer",
                  selectedCategoryId === catId && "bg-gray-200"
                )}
                onMouseEnter={() => setSelectedCategoryId(catId)}
              >
                <div className="flex gap-2">
                  <Image
                    alt={ALL_CATEGORIES[catId].title}
                    src={ALL_CATEGORIES[catId].image!}
                    width={40}
                    height={40}
                    className="h-auto"
                  />
                  <p>{ALL_CATEGORIES[catId].title}</p>
                </div>
                <IoChevronForward />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-9 h-full overflow-y-auto">
          <div className="px-10">
            <div className="mb-4">
              <Link className="text-2xl font-semibold" href="">
                {ALL_CATEGORIES[selectedCategoryId]?.title}
              </Link>
            </div>
            <div className="columns-3">
              {ALL_CATEGORIES[selectedCategoryId] &&
                (ALL_CATEGORIES[selectedCategoryId]?.subCategories ?? []).map(
                  (category) => (
                    <div key={category.id} className="mb-4">
                      <Link className="font-semibold" href="">
                        {category.title}
                      </Link>
                      <div>
                        {category.subCategories &&
                          category.subCategories.map((subCategory) => (
                            <Link
                              key={subCategory.id}
                              className="block"
                              href={subCategory.link}
                            >
                              {subCategory.title}
                            </Link>
                          ))}
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CategoriesPopup;
