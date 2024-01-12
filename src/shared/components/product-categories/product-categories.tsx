import { ROOT_CATEGORIES } from "@/mock-data/categories";
import { CategoryCard } from "./types";
import clsx from "clsx";

type Props = {
  categories?: CategoryCard[];
};

const wideTiles = [0, 3, 6, 11, 12, 13];

const ProductCategories = (props: Props) => {
  const { categories = ROOT_CATEGORIES } = props;

  return (
    <div className="product-categories">
      <div className="grid grid-cols-[repeat(17,_minmax(0,_1fr))] gap-2">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={clsx(
              "h-24 px-2.5 py-3 bg-no-repeat bg-right-bottom cursor-pointer rounded-lg bg-zinc-100 hover:bg-zinc-200",
              wideTiles.includes(index) ? "col-span-3" : "col-span-2"
            )}
            style={{
              backgroundImage: `url(${category.image})`,
            }}
          >
            <div className="text-sm w-4/6">{category.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
