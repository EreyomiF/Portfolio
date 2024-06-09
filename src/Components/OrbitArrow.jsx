import React from 'react';
import whiteImage from '../Assets/arrow svg - Copy - Copy.png'; // Replace with your white image path

const OrbitArrow = ({ isDarkMode }) => {
    return (
        <div className="top-image-container mr-8"
        style={{  transform: 'translateY(-55px)', marginRight:'-100px'}}  // Move the image up by 450px

        > {/* Use flexbox to align items */}
            <img 
                src={whiteImage} 
                alt="Top Image" 
                className={`image ${isDarkMode ? 'dark-mode' : 'light-mode'}`} // Adjust width and height
                style={{  transform: 'translateY(10px)', marginRight:'-160px'}}  // Move the image up by 450px
            />
            <p className="caption mb-4 hello relative text-sm "
             style={{  transform: 'translateY(20px)', marginLeft:'150px' }}  // Move the caption up
             > MY TECH SKILLS
            </p> {/* Move caption to the left */}
        </div>
    );
};

export default OrbitArrow;
