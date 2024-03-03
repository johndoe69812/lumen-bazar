"use client";

import { AdCategorySchema, CreateCategoryDTO } from "@/api";
import APIService from "@/api/api-service";
import { isString } from "lodash";
import { FormEvent, MouseEvent, useCallback, useMemo, useRef } from "react";
import buildCategoryTree from "../utils/build-category-tree";
import CategoriesTree from "./categories-tree";

type Props = {
  categories: AdCategorySchema[];
};

export const CategoryField = (props: Props) => {
  const { categories } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  const categoriesTree = useMemo(() => {
    return buildCategoryTree(categories);
  }, [categories]);

  const addCategory = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const entries = Object.fromEntries(fd.entries());

    try {
      await APIService.api.adsServiceCreateCategory({
        title: isString(entries.title) ? entries.title : "",
        parentId: isString(entries.parentId)
          ? parseInt(entries.parentId, 10)
          : undefined,
      });
    } catch (e) {
      return;
    }

    dialogRef.current?.close();
  }, []);

  return (
    <>
      <fieldset id="add-category">
        <legend>Add Category</legend>
        <details>
          <summary>Show All Categories</summary>
          <CategoriesTree categories={categoriesTree} />
        </details>
        <button onClick={() => dialogRef.current?.showModal()}>Add</button>
      </fieldset>
      <dialog
        ref={dialogRef}
        onClick={(e: MouseEvent<HTMLDialogElement>) => {
          if (e.target instanceof HTMLDialogElement) {
            dialogRef.current?.close();
          }
        }}
      >
        <form onSubmit={addCategory}>
          <fieldset>
            <legend>Create New Category</legend>
            <label htmlFor="title">Name of Category</label>
            <input name="title" />
            <label htmlFor="parentId">Select parent category</label>
            <select name="parentId">
              <option value={undefined}>None</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.parentId && "--"} {cat.title} - id:{cat.id}
                </option>
              ))}
            </select>
          </fieldset>
          <button type="submit">Add Category</button>
        </form>
      </dialog>
    </>
  );
};
