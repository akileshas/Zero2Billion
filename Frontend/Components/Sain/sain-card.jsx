import React from 'react';

const SainCard = ({ title, description, buttonText, borderColor, imgSrc }) => {
    return (
        <div className="sain-card" style={{ borderTopColor: borderColor }}>
            <div className="sain-card-image">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="sain-card-content">
                <div className="sain-card-title">{title}</div>
                <div className="sain-card-description">{description}</div>
                <button className="sain-card-button">{buttonText}</button>
            </div>
        </div>
    );
};

export default SainCard;
