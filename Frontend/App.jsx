import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home-Page/home-page";
import MakersTurnPage from "./Pages/Makers-Turn-Page/makers-turn-page";

import "./App.css";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/makers-turn" element={<MakersTurnPage />} />
            </Routes>
        </>
    );
};

export default App;
