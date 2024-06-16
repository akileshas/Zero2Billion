import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home-Page/home-page";
import GalleryPage from "./Pages/Gallery-Page/gallery-page";
import CentersPage from "./Pages/Centers-Page/centers-page";
import EventsPage from "./Pages/Events-Page/events-page";
import MakersTurnPage from "./Pages/Makers-Turn-Page/makers-turn-page";


import "./App.css";


const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} /> 
                <Route path="/centers" element={<CentersPage />} /> 
                <Route path="/events" element={<EventsPage />} /> 
                <Route path="/makers-turn" element={<MakersTurnPage />} />

            </Routes>
        </div>
    );
};

export default App;
