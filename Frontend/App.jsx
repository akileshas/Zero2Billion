import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home-Page/home-page";
import MakersTurnPage from "./Pages/Makers-Turn-Page/makers-turn-page";
import NotFoundPage from "./Pages/Not-Found-Page/not-found-page";
import "./App.css";

export const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
};

const App = () => {
    useScrollToTop();

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/makers-turn" element={<MakersTurnPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default App;