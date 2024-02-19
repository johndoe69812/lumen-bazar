"use client";

import { AdCategorySchema } from "@/api";
import useAllCategories from "@/shared/hooks/use-all-categories";
import clsx from "clsx";
import { flattenDeep } from "lodash";
import { useCallback, useMemo, useState } from "react";

type Props = {
  title: string;
  list: AdCategorySchema[];
  onClick: (alias: string) => void;
  active?: string;
};

const CategoriesCol = (props: Props) => {
  const { title, list, active, onClick } = props;

  return (
    <div className="h-full w-60 py-2 border-r">
      <div className="px-2 py-1 mb-1 text-gray-500">{title}</div>
      {list.map((cat) => (
        <div
          key={cat.alias}
          className={clsx(
            "px-2 py-1 leading-5 cursor-pointer hover:text-white hover:bg-blue-400",
            active === cat.alias && "bg-blue-500 text-white"
          )}
          onClick={() => onClick(cat.alias)}
        >
          {cat.title}
        </div>
      ))}
    </div>
  );
};

const SelectCategory = () => {
  const { isLoading, allCategories } = useAllCategories(false);
  const [active, setActive] = useState<string[]>([]);

  const flatCategories = useMemo(() => {
    return flattenDeep(allCategories).reduce<Record<string, AdCategorySchema>>(
      (acc, curr) => {
        acc[curr.alias] = curr;
        return acc;
      },
      {}
    );
  }, [allCategories]);

  const handleCategoryClick = useCallback((index: number, alias: string) => {
    setActive((items) => {
      if (index === 0) {
        return [alias];
      }

      return [...items.slice(0, index), alias];
    });
  }, []);

  console.log("allCategories", active);

  return (
    !isLoading && (
      <div id="select-category" className="flex">
        <div className="flex flex-grow-0 flex-shrink-1 border border-r-0">
          {Array(active.length + 1)
            .fill(0)
            .map((cat, index) => {
              let list: AdCategorySchema[] = [];

              if (index === 0) {
                list = allCategories;
              } else {
                list =
                  index === 1
                    ? allCategories.find((cat) => cat.alias === active[0])
                        ?.subCategories ?? []
                    : [];
              }

              return (
                <CategoriesCol
                  key={index}
                  title="Category"
                  list={list ?? []}
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
