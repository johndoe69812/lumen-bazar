"use client";

import { AdCategorySchema, CreateCategoryDTO } from "@/api";
import APIService from "@/api/api-service";
import { isNumber, isString } from "lodash";
import { FormEvent, useCallback, useRef } from "react";

type Props = {
  categories: AdCategorySchema[];
};

export const CategoryField = (props: Props) => {
  const { categories } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  const addCategory = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const entries = Object.fromEntries(fd.entries());
    APIService.api.adsServiceCreateCategory({
      title: isString(entries.title) ? entries.title : "",
      parentId: isString(entries.parentId)
        ? parseInt(entries.parentId, 10)
        : undefined,
    });
  }, []);

  return (
    <>
      <fieldset id="add-category">
        <h1>Add Category</h1>
        <div>
          <label htmlFor="Category Name">Category Name</label>
          <input name="name" />
        </div>
        <div>
          <label htmlFor="isTag">Select parent category</label>
          <select name="parentCategory">
            {categories.map((cat, index) => (
              <option key={`${cat.id}-${index}`} value={cat.id}>
                {cat.parentId && "--"} {cat.title} - id:{cat.id}
              </option>
            ))}
          </select>
        </div>
        <button onClick={() => dialogRef.current?.showModal()}>Add</button>
      </fieldset>
      <dialog ref={dialogRef}>
        <form onSubmit={addCategory}>
          <fieldset>
            <legend>Create New Category</legend>
            <label htmlFor="title">Name of Category</label>
            <input name="title" />
            <label htmlFor="parentId">Select parent category</label>
            <select name="parentId">
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
