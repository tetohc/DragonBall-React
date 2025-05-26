import { useEffect, useMemo, useState } from "react";

import { TitlePage } from "../../components"
import { CharacterCard, CharacterSearch } from "../components"
import { searchCharacter } from "../helpers";

export const SearchPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    try {
      const result = searchCharacter(searchQuery);
      setCharacters(result);
    } catch (error) {
      console.error("Error al realizar la búsqueda.", error);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  const filteredCharacter = useMemo(() => {
    if (!searchQuery) return [];
    return characters;
  }, [characters, searchQuery]);

  const onSearch = (event) => {
    setSearchQuery(event.target.value);
    setLoading(true);
  }
  return (
    <>
      <TitlePage title="Búsqueda de personajes" />

      <div className="flex justify-center mb-6">
        <CharacterSearch onSearch={onSearch} placeholder="🔍 Búsqueda por nombre, raza o afiliación ..." />
      </div>

      {!loading && searchQuery && filteredCharacter.length === 0 && (
        <div className="text-center py-8">
          <p className="text-xl text-gray-500">No se han encontrado resultados para tu búsqueda.</p>
        </div>
      )}

      {!loading && filteredCharacter.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {
            filteredCharacter.map(character => (
              <CharacterCard
                key={character.id}
                {...character}
              />
            ))
          }
        </div>
      )}
    </>
  )
}
