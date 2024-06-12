import React from 'react';
import whiteImage from '../Assets/arrow svg.png'; // Replace with your white image path

const ContactImage = ({ isDarkMode }) => {
    return (
        <div className="top-image-container flex items-center"> {/* Use flexbox to align items */}
            <p className="caption mb-2 hello relative text-sm "> LETS WORK TOGETHER </p> {/* Move caption to the left */}
            <img 
                src={whiteImage} 
                alt="Top Image" 
                className={`image ${isDarkMode ? 'dark-mode' : 'light-mode'}`} // Adjust width and height
            />
            <h1 className="caption mb-2 hello relative text-sm mr-12 "> Contact  </h1> {/* Move caption to the left */}
        </div>
    );
};

export default ContactImage;
