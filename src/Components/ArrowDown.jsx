// src/components/TopImage.js
import React from 'react';
import whiteImage from '../Assets/arrow svg.png'; // Replace with your white image path

const TopImage = ({ isDarkMode }) => {
    return (
        <div className="top-image-container"> {/* Use flexbox to align items */}
            <p className="caption mb-2 hello relative text-sm "> My certificates </p> {/* Move caption to the left */}
            <img 
                src={whiteImage} 
                alt="Top Image" 
                className={`image ${isDarkMode ? 'dark-mode' : 'light-mode'}`} // Adjust width and height
            />
        </div>
    );
};

export default TopImage;
