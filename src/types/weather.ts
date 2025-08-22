export interface WeatherSearchResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  timezone: string;
  postcodes: string[];
  country_id: number;
  country: string;
  admin1: string;
  admin2: string;
}

export interface WeatherSearchResponse {
  results: WeatherSearchResult[];
  generationtime_ms: number;
}
