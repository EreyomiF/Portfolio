import React, { useState } from 'react';

const OrbitAnimation = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="orbit">
      <ul className="orbit-wrap">
        <li
          className="orbit-center"
          onMouseEnter={() => setShowIcons(true)}
          onMouseLeave={() => setShowIcons(false)}
        >
          <i className="orbit-center__icon fas fa-code"></i>
        </li>
        <li>
          <ul className={`ring-0 ${showIcons ? 'visible' : 'hidden'}`}>
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
  );
};

export default OrbitAnimation;
