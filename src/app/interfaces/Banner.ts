export interface Banner {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: any;
  id: number;
  media_type: string;
  name?: string;
  title?: string;
  origin_country: any;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_counte: number;
}

export interface BannerResponse {
  page: number;
  results: Banner[];
  total_pages: number;
  total_results: number;
}
