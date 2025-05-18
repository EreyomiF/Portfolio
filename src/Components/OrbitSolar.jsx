import React, { useState } from 'react';
import OrbitArrow from './OrbitArrow'; // Assuming this component exists
import FavQuote from './FavoriteQuote'; // Assuming this component exists

const OrbitAnimation = ({ isDarkMode }) => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(prevShowIcons => !prevShowIcons);
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      {/* OrbitArrow component if it's part of the main visual, otherwise might be part of the orbit itself */}
      <div className="absolute"> {/* Consider positioning for OrbitArrow if it's separate */}
        <OrbitArrow isDarkMode={isDarkMode} />
      </div>
      
      <div className="relative transform md:transform-none z-10"
        style={{ transform: 'translateY(-120px)' }}  // Adjust this value as needed for vertical positioning
      >
        <div className="orbit-container"> {/* Ensure you have CSS for orbit-container and related classes */}
          <div className="orbit">
            <ul className="orbit-wrap">
              <li className="orbit-center" onClick={toggleIcons}>
                <i className="orbit-center__icon fas fa-code"></i> {/* Central icon, e.g., general coding */}
              </li>
              <li>
                {/* Ring 0: Frontend Core */}
                <ul className={`ring-0 ${showIcons ? 'visible' : 'hidden'}`}>
                  <li><i className="orbit-icon fab fa-html5"></i></li> {/* HTML */}
                  <li><i className="orbit-icon fab fa-css3-alt"></i></li> {/* CSS */}
                  <li><i className="orbit-icon fab fa-js-square"></i></li> {/* JavaScript */}
                  <li><i className="orbit-icon fab fa-react"></i></li> {/* React */}
                  <li><i className="orbit-icon fas fa-layer-group"></i></li> {/* Tailwind CSS (placeholder) */}
                </ul>
              </li>
              <li>
                {/* Ring 1: Version Control & Project Management */}
                <ul className={`ring-1 ${showIcons ? 'visible' : 'hidden'}`}>
                  <li><i className="orbit-icon fab fa-git-alt"></i></li> {/* Git */}
                  <li><i className="orbit-icon fab fa-github"></i></li> {/* GitHub */}
                  <li><i className="orbit-icon fab fa-jira"></i></li> {/* Jira */}
                </ul>
              </li>
              <li>
                {/* Ring 2: Backend, Tools & Environment */}
                <ul className={`ring-2 ${showIcons ? 'visible' : 'hidden'}`}>
                  <li><i className="orbit-icon fab fa-node-js"></i></li> {/* Node.js */}
                  <li><i className="orbit-icon fas fa-terminal"></i></li> {/* Terminal */}
                  <li><i className="orbit-icon fas fa-database"></i></li> {/* Database */}
                  <li><i className="orbit-icon fas fa-cloud"></i></li> {/* Cloud/API/Deployment */}
                  <li><i className="orbit-icon fab fa-npm"></i></li> {/* NPM */}
                </ul>
              </li>
              <li>
                {/* Ring 3: General Dev / Other Important Tools */}
                <ul className={`ring-3 ${showIcons ? 'visible' : 'hidden'}`}>
                  <li><i className="orbit-icon fas fa-coffee"></i></li> {/* Coffee - Dev Culture */}
                  <li><i className="orbit-icon fas fa-bug"></i></li> {/* Debugging */}
                  <li><i className="orbit-icon fas fa-file-code"></i></li> {/* IDE/Editor (e.g., VS Code placeholder) */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FavQuote component positioned at the bottom right */}
      <div className="absolute bottom-0 right-0 "> {/* Adjust positioning as needed */}
        <FavQuote />
      </div>
    </div>
  );
};

export default OrbitAnimation;