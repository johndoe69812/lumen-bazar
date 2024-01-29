export interface CityModel {
  id: number;
  name: string;
  state_id: number;
  state_code: string;
  country_id: number;
  country_code: string;
  latitude: number;
  longitude: number;
  created_at: Date;
  updated_at: Date;
  flag: string;
  wikidataid: string;
}
