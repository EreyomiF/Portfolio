import React, { useRef, useState } from 'react';
import myImage from '../Assets/myimage.jpeg';
import arrow2 from '../Assets/arrow svg - Copy.png';
import myVideo from '../Assets/Myvideo2.Mp4';

const BlurryImage = ({ isDarkMode }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      <video
        ref={videoRef}
        className="max-w-xl transition-all duration-300 w-100 h-[40rem] blur-sm hover:blur-none cursor-pointer"
        src={myVideo}
        loop
        muted
        style={{ borderRadius: '10%', marginTop: '-16px' }}
        onClick={handleVideoClick} // Play/Pause on click
      />
      <p className="caption mr-20 relative text-sm mt-4" style={{ marginTop: '30px' }}>ME!!</p>
      <img 
        src={arrow2} 
        alt="Arrow Image" 
        className={`w-20 h-20 ${isDarkMode ? 'dark-mode' : 'light-mode'}`} 
        style={{ marginTop: '-50px' }} 
      />
    </div>
  );
};

export default BlurryImage;
