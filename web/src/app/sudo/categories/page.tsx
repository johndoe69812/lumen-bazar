import PageHeadline from "../shared/components/page-headline";
import CategoriesTree from "./components/categories-tree/categories-tree";

const CategoriesPage = () => {
  return (
    <>
      <PageHeadline title="Categories" />
      <CategoriesTree />
    </>
  );
};

export default CategoriesPage;
