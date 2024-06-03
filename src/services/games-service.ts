import create from "./http-service";

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
    platforms: GamePlatforms[];
}

export interface GameResult {    
  count: number;
  next: string;
  previous: string;
  results: Game[]
}



export default create('/games');