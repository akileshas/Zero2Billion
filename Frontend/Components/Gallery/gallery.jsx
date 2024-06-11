import React from "react";
import { GalleryData } from "../../../Data/gallery-data"; // Assuming you have the data in a file named gallery-data.js
import "./gallery.css"; // Assuming you have the CSS for styling

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-heading">
                <div className="gallery-title">Gallery</div>
                <div className="gallery-divider" />
            </div>
            <div className="card-container">
                {GalleryData.map(item => (
                    <div key={item.id} className="gallery-card">
                        <a href={item.link}>
                            <img
                                src={item.imgSrc}
                                alt={item.title}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
