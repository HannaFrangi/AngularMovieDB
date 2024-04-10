 export interface ApiResult {
page: number;
results: MovieResult[];
total_pages: number;
total_results: number;
}

 export interface MovieResult {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Productioncompany[];
    production_countries: Productioncountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Spokenlanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  interface Spokenlanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  interface Productioncountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface Productioncompany {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }
  
  interface Genre {
    id: number;
    name: string;
  }

   export interface search {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
  }



