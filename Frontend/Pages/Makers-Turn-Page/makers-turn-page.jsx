import React, { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";

import Footer from "../../Components/Footer/footer";
import SmallScreen from "../../Components/SmallScreen/small-screen";
import "./makers-turn-page.css";

const MakersTurnPage = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} Session={"#makers-turn"}/>
            
            <Footer />
            <SmallScreen />
        </>
    );
};

export default MakersTurnPage;