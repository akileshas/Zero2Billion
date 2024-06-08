import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../Data/Images/logo.png";
import "./navbar.css";

const Navbar = ({ mobileMenu, setMobileMenu }) => {
    const [activeSection, setActiveSection] = useState("#home");
    const mobileMenuRef = useRef(null);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const handleResize = () => {
        if (window.innerWidth > 899) {
            setMobileMenu(false);
        }
    };

    useEffect(() => {
        handleResize();
        const intervalId = setInterval(() => {
            handleResize();
        }, 1);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            const scrollY = window.pageYOffset + 50;

            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop;
                const sectionId = `#${current.getAttribute("id")}`;

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (mobileMenu) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [mobileMenu]);

    return (
        <nav id="navbar">
            <div className="navbar-cont" style={{ position: !mobileMenu ? "" : "relative" }}>
                <div className="nav-cont" style={{ display: mobileMenu ? "none" : "flex" }}>
                    <div className="nav-img-container">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="nc-inner-cont">
                        <ul className="nav-list-cont">
                            <li className={`${activeSection === "#home" ? "active" : ""}`}>
                                <a href="#home">Home</a>
                            </li>
                            <li className={`${activeSection === "#about" ? "active" : ""}`}>
                                <a href="#about">About</a>
                            </li>
                            <li className={`${activeSection === "#services" ? "active" : ""}`}>
                                <a href="#services">Services</a>
                            </li>
                            <li className={`${activeSection === "#centers" ? "active" : ""}`}>
                                <a href="#centers">Centers</a>
                            </li>
                            <li className={`${activeSection === "#makers-turn" ? "active" : ""}`}>
                                <a href="#makers-turn">Makers Turn</a>
                            </li>
                            <li className={`${activeSection === "#events" ? "active" : ""}`}>
                                <a href="#events">Events</a>
                            </li>
                            <li className={`${activeSection === "#gallery" ? "active" : ""}`}>
                                <a href="#gallery">Gallery</a>
                            </li>
                        </ul>

                        <button className="investment-button">
                            <a href="">
                                For Investment
                            </a>
                        </button>
                        <div className="mobile-menu-toggle-button" onClick={toggleMobileMenu}>
                            <i className="bx bx-menu-alt-left"></i>
                        </div>
                    </div>
                </div>
                <div ref={mobileMenuRef} className={`mobile-nav-menu-cont ${mobileMenu ? "open" : ""}`}>
                    <div className="mobile-menu-toggle">
                        <div className="mobile-menu-close-button" onClick={toggleMobileMenu}>
                            <i className="bx bx-x"></i>
                        </div>
                    </div>
                    <div className="nav-img-container">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="seperator-line"></div>
                    <ul className="mobile-nav-list-cont">
                        <li className={`${activeSection === "#home" ? "active" : ""}`}>
                            <a href="#home" onClick={toggleMobileMenu}>Home</a>
                        </li>
                        <li className={`${activeSection === "#about" ? "active" : ""}`}>
                            <a href="#about" onClick={toggleMobileMenu}>About</a>
                        </li>
                        <li className={`${activeSection === "#services" ? "active" : ""}`}>
                            <a href="#services" onClick={toggleMobileMenu}>Services</a>
                        </li>
                        <li className={`${activeSection === "#centers" ? "active" : ""}`}>
                            <a href="#centers" onClick={toggleMobileMenu}>Centers</a>
                        </li>
                        <li className={`${activeSection === "#makers-turn" ? "active" : ""}`}>
                            <a href="#makers-turn" onClick={toggleMobileMenu}>Makers Turn</a>
                        </li>
                        <li className={`${activeSection === "#events" ? "active" : ""}`}>
                            <a href="#events" onClick={toggleMobileMenu}>Events</a>
                        </li>
                        <li className={`${activeSection === "#gallery" ? "active" : ""}`}>
                            <a href="#gallery" onClick={toggleMobileMenu}>Gallery</a>
                        </li>
                    </ul>
                    <button className="investment-button"><a href="">For Investment</a></button>
                </div>
                {mobileMenu && <div onClick={toggleMobileMenu} className="nav-mobile-overlay"></div>}
            </div>
        </nav>
    );
};

export default Navbar;