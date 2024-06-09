import React, { useState } from 'react';
import OrbitArrow from './OrbitArrow';
import FavQuote from './FavoriteQuote';

const OrbitAnimation = ({ isDarkMode }) => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(prevShowIcons => !prevShowIcons);
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="absolute">
        <OrbitArrow isDarkMode={isDarkMode} />
      </div>
      
      <div className="relative transform md:transform-none z-10"
        style={{ transform: 'translateY(-120px)' }}  // Adjust this value as needed
      >
        <div className="orbit-container">
          <div className="orbit">
            <ul className="orbit-wrap">
              <li className="orbit-center" onClick={toggleIcons}>
                <i className="orbit-center__icon fas fa-code"></i>
              </li>
              <li>
                <ul className={`ring-0 ${showIcons ? 'visible' : 'hidden'}`}>
                  <li><i className="orbit-icon fab fa-git"></i></li>
                  <li><i className="orbit-icon fab fa-git"></i></li>
                  <li><i className="orbit-icon fab fa-free-code-camp"></i></li>
                  <li><i className="orbit-icon fab fa-meetup"></i></li>
                  <li><i className="orbit-icon fab fa-codepen"></i></li>
                </ul>
              </li>
              <li>
                <ul className={`ring-1 ${showIcons ? 'visible' : 'hidden'}`}>
                  <li><i className="orbit-icon fas fa-podcast"></i></li>
                  <li><i className="orbit-icon fab fa-css3"></i></li>
                  <li><i className="orbit-icon fab fa-html5"></i></li>
                </ul>
              </li>
              <li>
                <ul className={`ring-2 ${showIcons ? 'visible' : 'hidden'}`}>
                  <li><i className="orbit-icon fab fa-windows"></i></li>
                  <li><i className="orbit-icon fab fa-safari"></i></li>
                  <li><i className="orbit-icon fab fa-edge"></i></li>
                  <li><i className="orbit-icon fab fa-linux"></i></li>
                  <li><i className="orbit-icon fab fa-apple"></i></li>
                  <li><i className="orbit-icon fab fa-chrome"></i></li>
                  <li><i className="orbit-icon fab fa-android"></i></li>
                  <li><i className="orbit-icon fab fa-firefox"></i></li>
                </ul>
              </li>
              <li>
                <ul className={`ring-3 ${showIcons ? 'visible' : 'hidden'}`}>
                  <li><i className="orbit-icon fas fa-coffee"></i></li>
                  <li><i className="orbit-icon fas fa-terminal"></i></li>
                  <li><i className="orbit-icon fas fa-heart"></i></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 ">
        <FavQuote />
      </div>
    </div>
  );
};

export default OrbitAnimation;
