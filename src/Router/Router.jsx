import { Routes, Route } from "react-router-dom";
import Games from "../CompenentsEng/Games";
import AboutUs from "../CompenentsEng/AboutUs";
import ContactUs from "../CompenentsEng/ContactUs";
import Index from "../Pages/Index";
import IndexTr from "../Pages/IndexTr";
import GamesTr from "../CompenentsTr/GamesTr";
import AboutUsTr from "../CompenentsTr/AboutUsTr";
import ContactUsTr from "../CompenentsTr/ContactUsTr";
import ErrorPage from "../CompenentsEng/ErrorPage";
import GameDetails from "../CompenentsEng/GameDetails";
import GameDetailsTr from "../CompenentsTr/GameDetailsTr";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tr" element={<IndexTr />} />
            <Route path="/games" element={<Games />} />
            <Route path="/gamestr" element={<GamesTr />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/abouttr" element={<AboutUsTr />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/contacttr" element={<ContactUsTr />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="/gametr/:id" element={<GameDetailsTr />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default AppRouter;