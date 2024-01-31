import { IoChevronForward } from "@react-icons/all-files/io5/IoChevronForward";
import Image from "next/image";
import Link from "@/shared/components/link";
import { ModalOverlay } from "@/shared/components/modal";
import { HTMLAttributes, useMemo, useState } from "react";
import { ALL_CATEGORIES } from "@/mock-data/categories";
import clsx from "clsx";
import useAllCategories from "@/shared/hooks/use-all-categories";

const DEFAULT_CATEGORY_ID = "vehicles";

type Props = HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
};

const CategoriesPopup = ({ onClose }: Props) => {
  const [selectedCategoryId, setSelectedCategoryId] =
    useState(DEFAULT_CATEGORY_ID);

  const { allCategories } = useAllCategories();

  const selectedCategory = useMemo(() => {
    return allCategories.find((cat) => cat.id === selectedCategoryId);
  }, [allCategories, selectedCategoryId]);

  return (
    <ModalOverlay className="top-[8rem] !items-start" onClose={onClose}>
      <div className="h-[65vh] 2xl:w-[1440px] z-10 rounded-b-3xl grid grid-cols-12 py-6 pl-16 overflow-hidden bg-white">
        <div className="relative col-span-3 h-full overflow-y-auto">
          <ul>
            {allCategories.map((cat) => (
              <li
                key={cat.id}
                data-category={cat.id}
                className={clsx(
                  "relative z-10 py-2 pl-2 pr-4 flex items-center justify-between rounded cursor-pointer",
                  selectedCategoryId === cat.id && "bg-gray-200"
                )}
                onMouseEnter={() => setSelectedCategoryId(cat.id)}
              >
                <div className="flex gap-2">
                  {cat.imageUrl && (
                    <Image
                      alt={cat.title}
                      src={cat.imageUrl!}
                      width={40}
                      height={40}
                      className="h-auto"
                    />
                  )}
                  <p>{cat.title}</p>
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
                {selectedCategory?.title}
              </Link>
            </div>
            <div className="columns-3">
              {selectedCategory &&
                (selectedCategory?.subCategories ?? []).map((category) => (
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
                            href={subCategory.alias}
                          >
                            {subCategory.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default CategoriesPopup;
