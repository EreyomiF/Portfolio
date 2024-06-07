import React from 'react';
import myImage from '../Assets/myimage.jpeg';
import arrow2 from '../Assets/arrow svg - Copy.png';

const BlurryImage = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <img 
        className="max-w-lg transition-all duration-300 w-64 h-96 blur-sm hover:blur-none" 
        src={myImage} 
        alt="image description" 
        style={{ borderRadius: '30%', transform: 'translateY(-150px)' }}  // Move the image up by 450px
      />
      <p className="caption mr-20 mb-2 hello relative text-sm transform translate-y-[-120px]">ME!!</p> {/* Move caption up */}
      <img 
        src={arrow2} 
        alt="Top Image" 
        className={`w-20 h-20 ${isDarkMode ? 'dark-mode' : 'light-mode'}`} 
        style={{  transform: 'translateY(-187px)' }}  // Move the image up by 450px
      />
    </div>
  );
};

export default BlurryImage;
