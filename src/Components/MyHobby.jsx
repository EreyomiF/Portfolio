import React from 'react';
import arrow2 from '../Assets/arrow svg - Copy.png';

const MyHobby = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full relative mb-8 lg:mb-0">
      <p
        className="caption ml-20 mb-2 hello relative text-sm"
        style={{ borderRadius: '10%', transform: 'translateY(40px)' }}
      >
      My hobby
      </p>
      <img 
        src={arrow2} 
        alt="Arrow icon" 
        className={`w-20 ml-20 h-20 ${isDarkMode ? 'dark-mode' : 'light-mode'}`} 
        style={{ transform: 'translateY(30px)' }} 
      />
      <p className="caption mr-40 mb-2 lg:mr-8 xl:-ml-8 xl:mt-2 hello relative text-sm transform translate-y-[-20px]">
      Singing, Playing video games, Studying
      </p>
    </div>
  );
};

export default MyHobby;
