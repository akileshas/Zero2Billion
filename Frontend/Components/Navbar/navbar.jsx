import React from "react";
import Logo from "../../../Data/Images/logo.png";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="nav-img-container">
                <img src={Logo} alt="" srcset="" />
            </div>
            <div className="nav-flex-cont">
                
            </div>
        </nav>
    )
}

export default Navbar;