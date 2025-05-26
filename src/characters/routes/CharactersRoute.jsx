import { Routes, Route } from "react-router"

import { Navbar } from "../../components/Navbar";
import { ZFighterPage, VillainPage, SearchPage, DetailPage, FreezerPage, OtherPage } from "../pages";

export const CharactersRoute = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto py-12 px-4">
                <Routes>
                    <Route path="zfighter" element={<ZFighterPage />} />
                    <Route path="detail/:id" element={<DetailPage />} />
                    <Route path="freezer" element={<FreezerPage />} />
                    <Route path="other" element={<OtherPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="villain" element={<VillainPage />} />
                </Routes>
            </div>
        </>
    )
}
