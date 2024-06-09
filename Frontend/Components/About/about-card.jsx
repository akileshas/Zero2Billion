import React from "react";

const AboutCard = ({
    number,
    title,
    description,
    highlightDetails,
    imgScr,
}) => {
    return (
        <div className={`about-card about-card-${number}`}>
            <div className="ac-text-cont">
                <p className="ac-tc-title">{title}</p>
                <p className="ac-tc-description">{description}
                    {(highlightDetails!=="") && (
                        <span className="ac-tc-highlight-details">{highlightDetails}</span>
                    )}
                </p>
            </div>
            <div className="ac-img-cont">
                <img src={imgScr} alt="" srcset="" />
            </div>
        </div>
    );
};

export default AboutCard;