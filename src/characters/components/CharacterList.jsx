import { useMemo } from "react";

import { CharacterCard } from "./CharacterCard";
import { getByAffiliation } from "../helpers/getByAffiliation";

export const CharacterList = ({ affiliation = '' }) => {

    const characters = useMemo(() => getByAffiliation(affiliation), [affiliation]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
            {
                characters.map(character => (
                    <CharacterCard
                        key={character.id}
                        {...character}
                    />
                ))
            }
        </div>
    )
}
