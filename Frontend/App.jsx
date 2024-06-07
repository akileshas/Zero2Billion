import React from "react";
import Navbar from "./Components/Navbar/navbar";

import Footer from "./Components/Footer/footer";
import SmallScreen from "./Components/SmallScreen/small-screen";
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />

            <Footer />
            <SmallScreen />
        </>
    );
};

export default App;