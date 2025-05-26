import { TitlePage } from "../../components";
import { CharacterList } from "../components";

export const VillainPage = () => {
    return (
        <>
            <TitlePage title="Villanos" />
            <CharacterList affiliation='Villano' />
        </>
    );
};
