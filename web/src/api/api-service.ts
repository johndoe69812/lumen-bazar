import { Api, HttpClient } from "./__generated__/generated-api";

const httpClient = new HttpClient({ baseUrl: "" }); // current hostname
const APIService = new Api(httpClient);

export default APIService;
