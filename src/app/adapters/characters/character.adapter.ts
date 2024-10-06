import { CharacterInfo } from "../../models/characters.model";

export const CharacterAdapter = ( characterInfo: CharacterInfo) => {
    return characterInfo.results;
}
