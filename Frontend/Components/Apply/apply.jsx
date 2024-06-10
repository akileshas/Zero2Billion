import React from "react";
import ApplyCard from "./apply-card";
import { ApplyData } from "../../../Data/apply-data";
import "./apply.css";

const Apply = () => {
    return (
        <section id="apply">
            <div className="apply-cont">
                <p className="ac-title">
                    Here You Can Apply
                </p>
                <div className="ac-card-cont">
                    {
                        ApplyData.map((item, index) => (
                            <ApplyCard
                                key={index}
                                number={index + 1}
                                title={item.title}
                                formUrl={item.formUrl}
                                doubleLine={item.doubleLine}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Apply;