import { ListOfCountriesResponse } from "./data-contracts";

export namespace Api {
  /**
   * No description
   * @tags locations
   * @name LocationsServiceFindOne
   * @request GET:/api/locations/{id}
   * @response `200` `void`
   */
  export namespace LocationsServiceFindOne {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags locations
   * @name LocationsServiceFindCity
   * @request GET:/api/locations/find-city/{queryString}
   * @response `200` `(ListOfCountriesResponse)[]` The list of all locations
   * @response `400` `void` Bad Request
   */
  export namespace LocationsServiceFindCity {
    export type RequestParams = {
      queryString: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListOfCountriesResponse[];
  }

  /**
   * No description
   * @tags Ads
   * @name AdsServiceFindOne
   * @request GET:/api/ads/category/{alias}
   * @response `200` `void` Found ads category
   */
  export namespace AdsServiceFindOne {
    export type RequestParams = {
      alias: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Ads
   * @name AdsServiceGetAll
   * @request GET:/api/ads/categories/all
   * @response `200` `void`
   */
  export namespace AdsServiceGetAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}
