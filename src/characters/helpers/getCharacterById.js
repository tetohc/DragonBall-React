import { characters } from "../data/characters";

export const getCharacterById = (id) => {
    return characters.find(character => character.id === Number(id));
}