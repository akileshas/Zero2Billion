import React from "react";
import imgScr from "../../../Data/Images/redirect-arrow.png";
import { Link } from "react-router-dom";

const ApplyCard = ({
    number,
    title,
    formUrl,
    description,
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
                <p className="ac-cc-cc-describe">
                    {description}
                </p>
                <div className="ac-cc-cc-button">
                    <img src={imgScr} alt="" />
                </div>
                <Link
                    to={formUrl}
                    className="ac-cc-cc-submit-button"
                >
                    Submit Now
                </Link>
            </div>
        </div>
    );
};

export default ApplyCard;
