import PageHeadline from "../shared/components/page-headline";
import CategoriesTree from "./components/categories-tree/categories-tree";

const CategoriesPage = () => {
  return (
    <div className="pt-6 pb-2 px-6">
      <PageHeadline title="Categories" />
      <CategoriesTree />
    </div>
  );
};

export default CategoriesPage;
