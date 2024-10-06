import { Info } from "./api.model";

enum Gender {
  "MALE" = "Male",
  "FAMELE" = "Famele",
  "GENDERLESS" = "Genderless",
  "UNKNOWN" = "Unknown"
}

export interface CharacterInfo {
  info: Info;
  results: Character[];
}

export interface LinkeElement {
  name: string;
  url: string;
}

export interface Origin  extends LinkeElement {}
export interface Location  extends LinkeElement {}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string,
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
