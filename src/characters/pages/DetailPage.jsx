import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { TitlePage } from "../../components";
import { getCharacterById } from "../helpers";
import { CharacterDetail } from "../components";

export const DetailPage = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const character = useMemo(() => getCharacterById(id), [id]);
  if (!character) {
    return <Navigate to="/zfighter" />
  }

  const onNavigateBack = () => {
    navigate(-1);
  }
  return (
    <>
      <TitlePage title="Información de personaje" />
      <CharacterDetail character={character} onNavigateBack={onNavigateBack} textButton="Regresar" />
    </>
  )
}