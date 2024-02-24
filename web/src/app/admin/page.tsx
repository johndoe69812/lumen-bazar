import APIService from "@/api/api-service";
import { CategoryField } from "./components/category-field";

import "./main.css";

async function getData() {
  APIService.http.baseUrl = "http://nest-api:3000";
  const categories = await APIService.api.adsServiceGetFlatCategories();

  return {
    categories,
  };
}

const AdminPage = async () => {
  const data = await getData();

  const { categories } = data;

  return (
    <main>
      <CategoryField categories={categories} />

      <fieldset id="add-parameter">
        <h1>Add Parameter</h1>
        <div>
          <label htmlFor="Category Name"></label>
          <input name="name" />
          <select name="datatype" id="">
            <option value="number">Number</option>
            <option value="string">String</option>
            <option value="array">Array</option>
          </select>
        </div>
        <button>Attach to category</button>
        <button>Add Parameter</button>
      </fieldset>

      <fieldset id="add-widget">
        <h1>Add Widget</h1>
        <div>
          <label htmlFor="Category Name"></label>
          <input name="name" />
          <select name="" id=""></select>
        </div>
        <button>Add Widget</button>
      </fieldset>
    </main>
  );
};

export default AdminPage;
