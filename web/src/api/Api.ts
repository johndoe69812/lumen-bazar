import { ListOfCountriesResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags locations
   * @name LocationsServiceFindOne
   * @request GET:/api/locations/{id}
   * @response `200` `void`
   */
  locationsServiceFindOne = (id: string, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/locations/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags locations
   * @name LocationsServiceFindCity
   * @request GET:/api/locations/find-city/{queryString}
   * @response `200` `(ListOfCountriesResponse)[]` The list of all locations
   * @response `400` `void` Bad Request
   */
  locationsServiceFindCity = (queryString: string, params: RequestParams = {}) =>
    this.http.request<ListOfCountriesResponse[], void>({
      path: `/api/locations/find-city/${queryString}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Ads
   * @name AdsServiceFindOne
   * @request GET:/api/ads/category/{alias}
   * @response `200` `void` Found ads category
   */
  adsServiceFindOne = (alias: string, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/ads/category/${alias}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Ads
   * @name AdsServiceGetAll
   * @request GET:/api/ads/categories/all
   * @response `200` `void`
   */
  adsServiceGetAll = (params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/ads/categories/all`,
      method: "GET",
      ...params,
    });
}
