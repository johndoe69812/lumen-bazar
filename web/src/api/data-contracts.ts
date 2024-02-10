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
