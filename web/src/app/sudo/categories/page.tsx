import PageHeadline from "../shared/components/page-headline";
import { CategoryField } from "./components/categories-field";

const CategoriesPage = () => {
  return (
    <>
      <PageHeadline title="Categories" />
      <CategoryField />
    </>
  );
};

export default CategoriesPage;
