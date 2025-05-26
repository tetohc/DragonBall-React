import { Routes, Route } from "react-router"

import { HomePage } from "../pages/HomePage";
import { CharactersRoute } from "../characters/routes/CharactersRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/*" element={<CharactersRoute />} />
            </Routes>
        </>
    )
}
