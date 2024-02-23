import APIService from "@/api/api-service";

import "./main.css";

async function getData() {
  APIService.http.baseUrl = "http://nest-api:3000";
  const categories = await APIService.api.adsServiceGetFlatCategories();

  console.log("categories", categories);

  return {
    categories,
  };
}

const AdminPage = async () => {
  const data = await getData();

  const { categories } = data;

  return (
    <main>
      <fieldset id="add-category">
        <h1>Add Category</h1>
        <div>
          <label htmlFor="Category Name">Category Name</label>
          <input name="name" />
        </div>
        <div>
          <label htmlFor="isTag">
            is Dynamic (can be related to multiple categories)
          </label>
          <input type="checkbox" name="isTag" />
        </div>
        <div>
          <label htmlFor="isTag">Select parent category</label>
          <select name="parentCategory">
            {categories.map((cat) => (
              <option key={cat.alias} value={cat.id}>
                {cat.parentId && "--"} {cat.title} - id:{cat.id}
              </option>
            ))}
          </select>
        </div>
        <button>Add</button>
      </fieldset>

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
