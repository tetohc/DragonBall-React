import { characters } from "../data/characters";

export const searchCharacter = (query = '') => {
    if (!query) return [];

    const cleanQuery = query.toLowerCase().trim();
    let filteredCharacter = characters.filter(x => x.name.toLocaleLowerCase().includes(cleanQuery));

    if (filteredCharacter.length === 0) {
        filteredCharacter = characters.filter(character => {
            return character.race.toLocaleLowerCase().includes(cleanQuery) ||
                character.affiliation.toLocaleLowerCase().includes(cleanQuery)
        });
    }
    return filteredCharacter;
}