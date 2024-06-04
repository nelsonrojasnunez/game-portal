import { Genre } from "./genres-service";
import create from "./http-service";
import { PlatformGameItem } from "./platforms-service";

export interface GamePlatforms {
  id: number;
  name: string;
  image_background: string;
}


export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    released: string;
    platforms: PlatformGameItem[];
    genres: Genre[];
}

export interface GameResult {    
  count: number;
  next: string;
  previous: string;
  results: Game[]
}



export default create('/games');