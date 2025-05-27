import { useMemo, useState } from "react";
import { TitlePage } from "../../components";
import { CharacterCard, CharacterSearch } from "../components";
import { searchCharacter } from "../helpers";

export const SearchPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = useMemo(() => debounce((query) => {
    setLoading(true);
    try {
      const result = searchCharacter(query);
      setCharacters(result);
    } catch (error) {
      console.error("Error al realizar la búsqueda.", error);
    } finally {
      setLoading(false);
    }
  }, 400), []);

  const onSearch = (event) => {
    setSearchQuery(event.target.value);
    debouncedSearch(event.target.value);
  };

  return (
    <>
      <TitlePage title="Búsqueda de personajes" />

      <div className="flex justify-center mb-6">
        <CharacterSearch onSearch={onSearch} placeholder="🔍 Búsqueda por nombre, raza o afiliación ..." />
      </div>

      {!loading && searchQuery && characters.length === 0 && (
        <div className="text-center py-8">
          <p className="text-xl text-gray-500">No se han encontrado resultados para tu búsqueda.</p>
        </div>
      )}

      {!loading && characters.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 min-h-[300px]">
          {characters.map(character => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
      )}
    </>
  );
};
