"use client";

import { AdCategorySchema, CreateCategoryDTO } from "@/api";
import { FC, useCallback, useMemo, useState } from "react";
import buildCategoryTree from "../../../shared/utils/build-category-tree";
import { Button, Card, Flex, Tree } from "antd";
import CreateCategoryModal from "../../modals/create-category.modal";
import { useCreateCategory } from "../../../shared/queries/categories/use-create-category";
import APIService from "@/api/api-service";
import { BasicDataNode } from "antd/es/tree";
import { useFlatCategories } from "../../../shared/queries";
import CategoryTreeItem from "./category-tree-item";
import styles from "./categories-tree.module.scss";

const CategoriesTree: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate } = useCreateCategory();
  const { data: categories, isFetching, refetch } = useFlatCategories();

  const categoriesTree = useMemo(() => {
    return categories && buildCategoryTree(categories);
  }, [categories]);

  const handleCreateCategory = useCallback(
    (values: CreateCategoryDTO) => {
      mutate(values);
      setIsModalOpen(false);
    },
    [mutate]
  );

  return (
    <>
      <Card className="shadow border">
        <Flex vertical gap={16}>
          <Tree<AdCategorySchema & BasicDataNode>
            fieldNames={{ children: "subCategories", key: "id" }}
            rootClassName={styles.root}
            defaultExpandedKeys={[]}
            disabled={isFetching}
            treeData={categoriesTree}
            itemHeight={50}
            height={500}
            titleRender={(data) => <CategoryTreeItem {...data} />}
            onDrop={async (data) => {
              const src = data.dragNode.id;
              const dst = data.node.id;

              await APIService.api.adsServiceUpdateCategory(src, {
                parentId: dst,
              });
              refetch();
            }}
            draggable
            blockNode
            virtual
          />
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Add Category
          </Button>
        </Flex>
      </Card>
      <CreateCategoryModal
        open={isModalOpen}
        onCreate={handleCreateCategory}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CategoriesTree;
