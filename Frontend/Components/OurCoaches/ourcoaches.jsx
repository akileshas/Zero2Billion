import React, { useState, useEffect, useCallback } from 'react';
import OurCoachesData from '../../../Data/ourcoaches-data';
import OurCoachesCard from "./ourcoachesCard";
import './ourcoaches.css';

const OurCoaches = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, OurCoachesData.length - 2));
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleResize = useCallback(() => {
        const containerWidth = document.querySelector('.ourcoaches-card-container').offsetWidth;
        const newCardWidth = containerWidth / 2 - 4.5; // Adjust for padding/margins
        setCardWidth(newCardWidth);
        setTranslateX(-(currentIndex * newCardWidth * 2));
    }, [currentIndex]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    useEffect(() => {
        setTranslateX(-(currentIndex * cardWidth * 2));
    }, [currentIndex, cardWidth]);

    return (
        <div className="ourcoaches-container">
            <p className="sct-title">Our Coaches</p>
            <div className="ourcoaches-card-container">
                <div
                    className="ourcoaches-cards"
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {OurCoachesData.map((coach, idx) => (
                        <OurCoachesCard
                            key={idx}
                            name={coach.name}
                            designation={coach.designation}
                            company={coach.company}
                            email={coach.email}
                            linkedinURL={coach.linkedinURL}
                            imgsrc={coach.imgsrc}
                            cardWidth={cardWidth} // Pass card width to the card component
                        />
                    ))}
                </div>
            </div>
            <div className="ourcoaches-arrows">
                <span
                    className={`arrow ${currentIndex === 0 ? 'disabled' : ''}`}
                    onClick={goToPrevSlide}
                >
                    &#9664;
                </span>
                <span
                    className={`arrow ${currentIndex === 6 ? 'disabled' : ''}`}
                    onClick={goToNextSlide}
                >
                    &#9654;
                </span>
            </div>
        </div>
    );
};

export default OurCoaches;
