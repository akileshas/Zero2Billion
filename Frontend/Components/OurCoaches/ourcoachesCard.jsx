import React from 'react';

const OurCoachesCard = ({ name, designation, company, email, linkedinURL, imgsrc }) => {
    return (
        <div className="ourcoaches-card">
            <img src={imgsrc} alt={name} />
            <div className="ourcoaches-card-content">
                <div className="ourcoaches-card-name">{name}</div>
                <div className="ourcoaches-card-designation">{designation}</div>
                <div className="ourcoaches-card-company">{company}</div>
                <a className="ourcoaches-card-email" href={`mailto:${email}`}>
                    {email}
                </a>
                <a
                    className="ourcoaches-card-linkedin"
                    href={linkedinURL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default OurCoachesCard;
