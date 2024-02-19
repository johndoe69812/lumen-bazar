"use client";

import { AdCategorySchema } from "@/api";
import useAllCategories from "@/shared/hooks/use-all-categories";

import { useCallback, useMemo, useState } from "react";
import CategoriesCol from "./categories-col";

const SelectCategory = () => {
  const { isLoading, allCategories } = useAllCategories(false);
  const [active, setActive] = useState<string[]>([]);

  const handleCategoryClick = useCallback((index: number, alias: string) => {
    setActive((items) => {
      if (index === 0) {
        return [alias];
      }

      return [...items.slice(0, index), alias];
    });
  }, []);

  const categoriesPath = useMemo(() => {
    let path: AdCategorySchema[][] = [allCategories];

    active.forEach((alias) => {
      path.push(
        path[path.length - 1].find((cat) => cat.alias === alias)
          ?.subCategories ?? []
      );
    });

    return path;
  }, [active, allCategories]);

  return (
    !isLoading && (
      <div id="select-category" className="flex">
        <div className="flex flex-grow-0 flex-shrink-1 border border-r-0">
          {categoriesPath.map((list, index) => {
            if (list.length === 0) {
              return null;
            }

            return (
              <CategoriesCol
                key={index}
                title={
                  index === 0
                    ? "Category"
                    : categoriesPath[index - 1].find(
                        (c) => c.alias === active[index - 1]
                      )?.title ?? ""
                }
                list={list}
                active={active[index]}
                onClick={(alias) => handleCategoryClick(index, alias)}
              />
            );
          })}
        </div>
      </div>
    )
  );
};

export default SelectCategory;
