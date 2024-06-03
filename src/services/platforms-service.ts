import create from "./http-service";

export interface Platform {
    id: number;
    name: string;
}

export interface PlatformResult {    
  count: number;
  next: string;
  previous: string;
  results: Platform[]
}


export interface PlatformGameItem {
  platform: Platform;
}

export default create('/platforms');