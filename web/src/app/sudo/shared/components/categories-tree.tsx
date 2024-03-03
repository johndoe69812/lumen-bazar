import { AdCategorySchema } from "@/api";
import APIService from "@/api/api-service";
import {
  DragEvent,
  DragEventHandler,
  HTMLAttributes,
  useCallback,
  useState,
} from "react";

type Props = HTMLAttributes<HTMLUListElement> & {
  categories: AdCategorySchema[];
  isTopLevel?: boolean;
};

const CategoryList = (props: Props) => {
  const { categories, isTopLevel = false, ...rest } = props;

  const [expandedList, setExpandedList] = useState<number[]>([]);

  const handleToggle = useCallback((id: number) => {
    setExpandedList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const handleCollapseAll = useCallback(() => {
    if (expandedList.length === 0) return;

    setExpandedList([]);
  }, [expandedList]);

  const handleDrop = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const src = e.dataTransfer.getData("text");
    const dst = e.currentTarget.dataset.catId;

    if (!src || !dst || src === dst) {
      console.warn("Source or Dest don't exist");
      return;
    }

    APIService.api.adsServiceUpdateCategory(parseInt(src, 10), {
      parentId: parseInt(dst, 10),
    });
  }, []);

  const handleMakeGeneral: DragEventHandler<HTMLUListElement> = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      const src = e.dataTransfer.getData("text");

      APIService.api.adsServiceUpdateCategory(parseInt(src, 10), {
        parentId: null,
      });
    },
    []
  );

  return (
    <ul
      className="cat-tree"
      style={{ padding: 10, paddingBottom: isTopLevel ? 100 : 10 }}
      {...(isTopLevel
        ? {
            onDrop: handleMakeGeneral,
            onDragOver: (e) => {
              e.preventDefault();
            },
          }
        : {})}
      {...rest}
    >
      {categories.map((cat) => (
        <li
          data-cat-id={cat.id}
          key={cat.id}
          onClick={(e) => {
            e.stopPropagation();
            handleToggle(cat.id);
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDragStart={(e) => {
            e.stopPropagation();
            handleCollapseAll();

            e.dataTransfer.clearData();
            e.dataTransfer.setData("text/plain", cat.id.toString());
            e.currentTarget.classList.add("dragging");
          }}
          onDragEnter={(e) => {
            let target = e.target as HTMLElement;

            if (target.tagName === "LI") {
              target.classList.add("dragover");
            }
          }}
          onDragLeave={(e) => {
            const target = e.target as HTMLElement;

            if (target.tagName === "LI") {
              target.classList.remove("dragover");
            }
          }}
          onDrop={handleDrop}
          draggable
        >
          <span>
            {cat.title} [{cat.id}]
          </span>
          <span className="actions">
            <button>Delete</button>
          </span>
          {expandedList.includes(cat.id) && cat.subCategories && (
            <CategoryList
              categories={cat.subCategories}
              style={{ margin: rest.style?.marginLeft ?? 0 + 10 }}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

const CategoriesTree = (props: Pick<Props, "categories">) => {
  const { categories } = props;

  return (
    <div className="flex">
      <CategoryList categories={categories} isTopLevel />
      <CategoryList categories={categories} isTopLevel />
    </div>
  );
};

export default CategoriesTree;
