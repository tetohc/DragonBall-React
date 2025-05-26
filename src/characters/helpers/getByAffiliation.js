import { characters } from "../data/characters";

export const getByAffiliation = (affiliation) => {
    if (!affiliation) {
        return characters;
    }
    const data = characters.filter(character => character.affiliation === affiliation);
    return data;
}