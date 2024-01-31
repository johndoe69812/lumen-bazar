import { AdCategory } from '../entities/category.entity';

const buildCategoryTree = (items: AdCategory[], parentId = null) => {
  const tree = [];

  const children = items.filter((item) => item.parentId === parentId);
  children.forEach((child) => {
    const nestedChildren = buildCategoryTree(items, child.id);
    if (nestedChildren.length > 0) {
      child.subCategories = nestedChildren;
    }
    tree.push(child);
  });

  return tree;
};

export default buildCategoryTree;
