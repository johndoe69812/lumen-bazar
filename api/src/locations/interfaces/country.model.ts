export interface CountryModel {
  id: number;
  iso2: string;
  iso3: string;
  numeric_code: number;
  name: string;
  phonecode: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string; // Top Level Domain
  native: string; // Native Country Name
  region: string;
  region_id: number;
  subregion: string;
  subregion_id: number;
  nationality: string;
  timezones: string;
  translations: string;
  latitude: number;
  longitude: number;
  emoji: string;
  emojiu: string;
  created_at: Date;
  updated_at: Date;
  flag: boolean;
  wikidataid: string;
}
