"use client";

import { AdCategorySchema, CreateCategoryDTO } from "@/api";
import { useCallback, useMemo, useState } from "react";
import buildCategoryTree from "../../shared/utils/build-category-tree";
import CategoriesTree from "./categories-tree";
import { Button, Card, Flex, Tree, TreeDataNode } from "antd";
import CreateCategoryModal from "../modals/create-category.modal";
import { useCreateCategory } from "../../shared/queries/categories/use-create-category";
import APIService from "@/api/api-service";
import { DeleteOutlined } from "@ant-design/icons";
import { BasicDataNode } from "antd/es/tree";
import { useFlatCategories } from "../../shared/queries";

export const CategoryField = () => {
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
    <Card className="shadow border">
      <Tree<AdCategorySchema & BasicDataNode>
        fieldNames={{ children: "subCategories", key: "id" }}
        className="draggable-tree"
        defaultExpandedKeys={[]}
        disabled={isFetching}
        draggable
        blockNode
        onDragEnter={() => {}}
        onDrop={async (data) => {
          const src = data.dragNode.id;
          const dst = data.node.id;

          await APIService.api.adsServiceUpdateCategory(src, {
            parentId: dst,
          });
          refetch();
        }}
        treeData={categoriesTree}
        titleRender={({ title }) => (
          <Flex gap={4}>
            <span>{title}</span>
            <Button size="small" title="Delete" icon={<DeleteOutlined />} />
          </Flex>
        )}
      />
      {/* <fieldset id="add-category">
        <legend>Add Category</legend>
        <details>
          <summary>Show All Categories</summary>
          <CategoriesTree categories={categoriesTree} />
        </details>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Add Category
        </Button>
      </fieldset> */}
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Add Category
      </Button>
      <CreateCategoryModal
        open={isModalOpen}
        onCreate={handleCreateCategory}
        onCancel={() => setIsModalOpen(false)}
      />
    </Card>
  );
};
