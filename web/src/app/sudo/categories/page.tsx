import APIService from "@/api/api-service";
import { CategoryField } from "../components/category-field";
import Heading from "@/shared/components/heading";

async function getData() {
  APIService.http.baseUrl = "http://nest-api:3000";
  const categories = await APIService.api.adsServiceGetFlatCategories();

  return {
    categories,
  };
}

const CategoriesPage = async () => {
  const { categories } = await getData();

  return (
    <div>
      <Heading variant="h2" className="text-indigo-900">
        Categories
      </Heading>
      <CategoryField categories={categories} />
    </div>
  );
};

export default CategoriesPage;
