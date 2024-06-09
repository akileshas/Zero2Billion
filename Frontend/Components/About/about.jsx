import React from "react";
import AboutCard from "./about-card";
import { AboutData } from "../../../Data/about-data";
import "./about.css";

const About = () => {
    return (
        <section id="about">
            <div className="about-cont">
                {
                    AboutData.map((item, index) => {
                        return (
                            <AboutCard
                                key={index}
                                number={index+1}
                                title={item.title}
                                description={item.description}
                                highlightDetails={item.highlightDetails}
                                imgScr={item.imgScr}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
};

export default About;