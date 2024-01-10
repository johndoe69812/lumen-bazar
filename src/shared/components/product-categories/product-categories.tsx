import { CategoryCard } from "./types";
import { PLACEHOLD_CATEGORIES } from "./constants";

type Props = {
  categories?: CategoryCard[];
};

const ProductCategories = (props: Props) => {
  const { categories = PLACEHOLD_CATEGORIES } = props;

  return (
    <div className="product-categories">
      <div className="grid grid-cols-7 gap-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="h-24 px-2.5 py-3 bg-no-repeat bg-right-bottom cursor-pointer rounded-lg bg-zinc-100 hover:bg-zinc-200"
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
