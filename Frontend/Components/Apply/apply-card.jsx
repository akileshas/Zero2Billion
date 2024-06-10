import React from "react";
import imgScr from "../../../Data/Images/redirect-arrow.png";
import { Link } from "react-router-dom";

const ApplyCard = ({
    number,
    title,
    formUrl,
    doubleLine
}) => {
    return (
        <div className={`ac-cc-card ac-cc-card-${number}`}>
            <div className="ac-cc-card-cont">
                <p 
                    className={`ac-cc-cc-title ${doubleLine ? "double-line" : ""}`}
                >
                    {title}
                </p>
                <Link to={formUrl} className="ac-cc-cc-button">
                    <img src={imgScr} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default ApplyCard;
