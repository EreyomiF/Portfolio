import React from 'react';
import arrow2 from '../Assets/arrow svg - Copy.png';

const FavQuote = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full relative mb-8 lg:mb-0 "
     style={{  transform: 'translateY(-10px)',marginRight: '80px'}}
    >
      <p
        className="caption ml-16 mb-2 hello relative text-sm"
        style={{  transform: 'translateY(40px)' }}
      >
      Favorite quote
      </p>
      <img 
        src={arrow2} 
        alt="Arrow icon" 
        className={`w-20 ml-8 h-20 ${isDarkMode ? 'dark-mode' : 'light-mode'}`} 
        style={{ transform: 'translateY(30px)' }} 
      />
      <p className="caption  mb-2 hello relative text-sm transform translate-y-[-20px]"
      style={{  transform: 'translateY(-35px)',marginRight: '150px' }}
        >
       "Stay hungry, Stay foolish" <br />
       __Steve Jobs
      </p>
    </div>
  );
};

export default FavQuote;
