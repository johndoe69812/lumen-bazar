export interface Country {
  code: string;
  name: string;
}

export interface ListOfCountriesResponse {
  /** @example 11 */
  id: number;
  /** @example "New York" */
  name: string;
  country: Country;
}

export interface CreateCategoryDTO {
  /**
   * @min 3
   * @max 50
   */
  title: string;
  parentId?: number | null;
}

export interface AdCategorySchema {
  id: number;
  title: string;
  alias: string;
  parentId: number;
  imageUrl: string;
  /** @format date-time */
  dateCreated: string;
  /** @format date-time */
  dateUpdated: string;
  subCategories: AdCategorySchema[];
}

export interface UpdateCategoryDTO {
  /**
   * @min 3
   * @max 50
   */
  title?: string;
  parentId?: number | null;
}

export interface CreateAdRequest {
  /**
   * @min 10
   * @max 200
   */
  title: string;
}

export interface CreateAdParamDTO {
  /**
   * @min 3
   * @max 50
   */
  name: string;
  /** Data type (one of: number, string or options) */
  dataType: string;
  /** Id of option (Number) */
  optionId?: number;
  /** Id of category (Number) */
  categoryId: number;
  /** Meta information(constraints) for parameter */
  meta: object;
}

export interface AdParamSchema {
  id: number;
  name: string;
  dataType: string;
  /** @format date-time */
  dateCreated: string;
  category: AdCategorySchema[];
}

export interface ParamOptionVariantSchema {
  id: number;
  name: string;
  value: string;
}

export interface ParamOptionSchema {
  id: number;
  name: string;
  /** @format date-time */
  dateCreated: string;
  items: ParamOptionVariantSchema[];
}

export interface ArrayOfIdsDTO {
  ids: number[];
}

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
   * @tags ads
   * @name AdsServiceGetAdvertisements
   * @request GET:/api/ads
   * @response `200` `void`
   */
  export namespace AdsServiceGetAdvertisements {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceCreateCategory
   * @request POST:/api/ads/category
   * @response `200` `AdCategorySchema` Create ad category
   */
  export namespace AdsServiceCreateCategory {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateCategoryDTO;
    export type RequestHeaders = {};
    export type ResponseBody = AdCategorySchema;
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceGetAllCategories
   * @request GET:/api/ads/categories/all
   * @response `200` `(AdCategorySchema)[]` The list of all categories
   */
  export namespace AdsServiceGetAllCategories {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdCategorySchema[];
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceGetGeneralCategories
   * @request GET:/api/ads/categories/general
   * @response `200` `(AdCategorySchema)[]` The list of general categories
   */
  export namespace AdsServiceGetGeneralCategories {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdCategorySchema[];
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceGetFlatCategories
   * @request GET:/api/ads/categories/flat
   * @response `200` `(AdCategorySchema)[]` The list of flat all categories
   */
  export namespace AdsServiceGetFlatCategories {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdCategorySchema[];
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceUpdateCategory
   * @request PATCH:/api/ads/category/{categoryId}
   * @response `200` `(AdCategorySchema)[]` Update ad category
   */
  export namespace AdsServiceUpdateCategory {
    export type RequestParams = {
      categoryId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateCategoryDTO;
    export type RequestHeaders = {};
    export type ResponseBody = AdCategorySchema[];
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceDeleteCategory
   * @request DELETE:/api/ads/category/{categoryId}
   * @response `200` `void` Delete ad category
   */
  export namespace AdsServiceDeleteCategory {
    export type RequestParams = {
      categoryId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceCreateAdvertisement
   * @request POST:/api/ads/create
   * @response `201` `void`
   */
  export namespace AdsServiceCreateAdvertisement {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateAdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceCreateParam
   * @request POST:/api/ads/ad-param
   * @response `200` `void` Create ad parameter
   */
  export namespace AdsServiceCreateParam {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateAdParamDTO;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceGetAllParameters
   * @request GET:/api/ads/ad-params
   * @response `200` `(AdParamSchema)[]` Get all ad parameters
   */
  export namespace AdsServiceGetAllParameters {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdParamSchema[];
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceUpdateAdParameter
   * @request PATCH:/api/ads/ad-params/{paramId}
   * @response `200` `(AdParamSchema)[]` Update ad parameters
   */
  export namespace AdsServiceUpdateAdParameter {
    export type RequestParams = {
      paramId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateAdParamDTO;
    export type RequestHeaders = {};
    export type ResponseBody = AdParamSchema[];
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceDeleteAdParameter
   * @request DELETE:/api/ads/ad-params/{paramId}
   * @response `200` `boolean` Delete ad parameters
   */
  export namespace AdsServiceDeleteAdParameter {
    export type RequestParams = {
      paramId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = boolean;
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceGetAllParamOptions
   * @request GET:/api/ads/ad-params/options
   * @response `200` `(ParamOptionSchema)[]` Get ad options for parameter
   */
  export namespace AdsServiceGetAllParamOptions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ParamOptionSchema[];
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceDeleteOptions
   * @request DELETE:/api/ads/ad-params/options
   * @response `200` `boolean` Delete ad options (array of ids)
   */
  export namespace AdsServiceDeleteOptions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ArrayOfIdsDTO;
    export type RequestHeaders = {};
    export type ResponseBody = boolean;
  }
  /**
   * No description
   * @tags ads
   * @name AdsServiceCreateOptions
   * @request POST:/api/ads/ad-params/option
   * @response `200` `ParamOptionSchema` Create option
   */
  export namespace AdsServiceCreateOptions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ParamOptionSchema;
    export type RequestHeaders = {};
    export type ResponseBody = ParamOptionSchema;
  }
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data.data;
    });
  };
}

/**
 * @title Lumen Bazar API
 * @version 1.0
 * @contact
 *
 * Lumen Bazar API description
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  api = {
    /**
     * No description
     *
     * @tags locations
     * @name LocationsServiceFindOne
     * @request GET:/api/locations/{id}
     * @response `200` `void`
     */
    locationsServiceFindOne: (id: string, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/api/locations/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags locations
     * @name LocationsServiceFindCity
     * @request GET:/api/locations/find-city/{queryString}
     * @response `200` `(ListOfCountriesResponse)[]` The list of all locations
     * @response `400` `void` Bad Request
     */
    locationsServiceFindCity: (queryString: string, params: RequestParams = {}) =>
      this.http.request<ListOfCountriesResponse[], void>({
        path: `/api/locations/find-city/${queryString}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceGetAdvertisements
     * @request GET:/api/ads
     * @response `200` `void`
     */
    adsServiceGetAdvertisements: (params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/api/ads`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceCreateCategory
     * @request POST:/api/ads/category
     * @response `200` `AdCategorySchema` Create ad category
     */
    adsServiceCreateCategory: (data: CreateCategoryDTO, params: RequestParams = {}) =>
      this.http.request<AdCategorySchema, any>({
        path: `/api/ads/category`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceGetAllCategories
     * @request GET:/api/ads/categories/all
     * @response `200` `(AdCategorySchema)[]` The list of all categories
     */
    adsServiceGetAllCategories: (params: RequestParams = {}) =>
      this.http.request<AdCategorySchema[], any>({
        path: `/api/ads/categories/all`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceGetGeneralCategories
     * @request GET:/api/ads/categories/general
     * @response `200` `(AdCategorySchema)[]` The list of general categories
     */
    adsServiceGetGeneralCategories: (params: RequestParams = {}) =>
      this.http.request<AdCategorySchema[], any>({
        path: `/api/ads/categories/general`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceGetFlatCategories
     * @request GET:/api/ads/categories/flat
     * @response `200` `(AdCategorySchema)[]` The list of flat all categories
     */
    adsServiceGetFlatCategories: (params: RequestParams = {}) =>
      this.http.request<AdCategorySchema[], any>({
        path: `/api/ads/categories/flat`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceUpdateCategory
     * @request PATCH:/api/ads/category/{categoryId}
     * @response `200` `(AdCategorySchema)[]` Update ad category
     */
    adsServiceUpdateCategory: (categoryId: number, data: UpdateCategoryDTO, params: RequestParams = {}) =>
      this.http.request<AdCategorySchema[], any>({
        path: `/api/ads/category/${categoryId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceDeleteCategory
     * @request DELETE:/api/ads/category/{categoryId}
     * @response `200` `void` Delete ad category
     */
    adsServiceDeleteCategory: (categoryId: number, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/api/ads/category/${categoryId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceCreateAdvertisement
     * @request POST:/api/ads/create
     * @response `201` `void`
     */
    adsServiceCreateAdvertisement: (data: CreateAdRequest, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/api/ads/create`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceCreateParam
     * @request POST:/api/ads/ad-param
     * @response `200` `void` Create ad parameter
     */
    adsServiceCreateParam: (data: CreateAdParamDTO, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/api/ads/ad-param`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceGetAllParameters
     * @request GET:/api/ads/ad-params
     * @response `200` `(AdParamSchema)[]` Get all ad parameters
     */
    adsServiceGetAllParameters: (params: RequestParams = {}) =>
      this.http.request<AdParamSchema[], any>({
        path: `/api/ads/ad-params`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceUpdateAdParameter
     * @request PATCH:/api/ads/ad-params/{paramId}
     * @response `200` `(AdParamSchema)[]` Update ad parameters
     */
    adsServiceUpdateAdParameter: (paramId: number, data: CreateAdParamDTO, params: RequestParams = {}) =>
      this.http.request<AdParamSchema[], any>({
        path: `/api/ads/ad-params/${paramId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceDeleteAdParameter
     * @request DELETE:/api/ads/ad-params/{paramId}
     * @response `200` `boolean` Delete ad parameters
     */
    adsServiceDeleteAdParameter: (paramId: number, params: RequestParams = {}) =>
      this.http.request<boolean, any>({
        path: `/api/ads/ad-params/${paramId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceGetAllParamOptions
     * @request GET:/api/ads/ad-params/options
     * @response `200` `(ParamOptionSchema)[]` Get ad options for parameter
     */
    adsServiceGetAllParamOptions: (params: RequestParams = {}) =>
      this.http.request<ParamOptionSchema[], any>({
        path: `/api/ads/ad-params/options`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceDeleteOptions
     * @request DELETE:/api/ads/ad-params/options
     * @response `200` `boolean` Delete ad options (array of ids)
     */
    adsServiceDeleteOptions: (data: ArrayOfIdsDTO, params: RequestParams = {}) =>
      this.http.request<boolean, any>({
        path: `/api/ads/ad-params/options`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ads
     * @name AdsServiceCreateOptions
     * @request POST:/api/ads/ad-params/option
     * @response `200` `ParamOptionSchema` Create option
     */
    adsServiceCreateOptions: (data: ParamOptionSchema, params: RequestParams = {}) =>
      this.http.request<ParamOptionSchema, any>({
        path: `/api/ads/ad-params/option`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
