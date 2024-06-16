import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home-Page/home-page";

import "./App.css";


const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                
            </Routes>
        </div>
    );
};

export default App;
