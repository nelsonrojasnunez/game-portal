import create from "./http-service";

export interface Genre {
    id: number;
    name: string;
    slug: string;
}

export interface GenreResult {    
  count: number;
  next: string;
  previous: string;
  results: Genre[]
}

export default create('/genres');