import React from 'react';
import myImage from '../Assets/myimage.jpeg';
import arrow2 from '../Assets/arrow svg - Copy.png';
import myVideo from '../Assets/Myvideo2.Mp4';

const BlurryImage = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col items-center justify-center relative">
    <video
     className="max-w-xl transition-all duration-300 w-100 h-[40rem] blur-sm hover:blur-none"
     src={myVideo}
      autoPlay
      loop
      muted
      style={{ borderRadius: '10%', marginTop: '-16px' }}
    />
      <p className="caption mr-20  hello relative text-sm mt-4" style={{ marginTop: '30px' }}>ME!!</p> 
      <img 
        src={arrow2} 
        alt="Arrow Image" 
        className={`w-20 h-20 ${isDarkMode ? 'dark-mode' : 'light-mode'}`} 
        style={{ marginTop: '-50px' }} // Adjust margin to move arrow independently
      />
    </div>
  );
};

export default BlurryImage;
