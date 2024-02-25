import { AdCategorySchema } from "@/api";
import { Nullable } from "@/types/utils";

const buildCategoryTree = (
  items: AdCategorySchema[],
  parentId: Nullable<number> = null
) => {
  const tree: AdCategorySchema[] = [];

  const children = items.filter((item) => item.parentId === parentId);

  children.forEach((child) => {
    const nestedChildren = buildCategoryTree(items, child.id ?? null);
    if (nestedChildren.length > 0) {
      child.subCategories = nestedChildren;
    }
    tree.push(child);
  });

  return tree;
};

export default buildCategoryTree;
