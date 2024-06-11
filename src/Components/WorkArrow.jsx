import React from 'react';
import whiteImage from '../Assets/arrow svg.png'; // Replace with your white image path

const WorkArrow = ({ isDarkMode }) => {
    return (
        <div className="top-image-container flex items-center justify-center flex-col"> {/* Use flexbox to align items */}
            <img 
                src={whiteImage} 
                alt="Top Image" 
                className={`image ${isDarkMode ? 'dark-mode' : 'light-mode'}`} // Adjust width and height
            />
            <p className="caption mt-[-40px] hello relative text-sm mr-[200px]"> WHAT I HAVE DONE SO FAR </p> {/* Move caption to the left */}
        </div>
    );
};

export default WorkArrow;
