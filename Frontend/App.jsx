import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home-Page/home-page";
import GalleryPage from "./Pages/Gallery-Page/gallery-page"; // Import the GalleryPage component
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} /> 
            </Routes>
        </div>
    );
};

export default App;
