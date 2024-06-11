import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import LightBulbIcon from '../Assets/light bulb (1).png'; // Use your light bulb image
import HeroSection from './Home'; // Make sure to import the correct component
import InstructionLightModeIcon from '../Assets/Group (1).png'; // Replace with your light mode instruction icon
import InstructionDarkModeIcon from '../Assets/Group.png'; // Replace with your dark mode instruction icon
import Navbar from './HeroNav';
import GridComponent from './SecondSection';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Experience from './WorkExperience';


// Define the shake animation
const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 65px;
  left: 300px;
  flex-direction: column; /* Align children vertically */
  z-index: 10; /* Ensure the toggle is on top */

  @media (max-width: 640px) {
    top: 73px; /* Move up on small screens */
    left: 300px; /* Adjust left position if needed */
  }
`;

const Icon = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 10px;
  cursor: pointer;
  filter: ${({ isDarkMode }) => (isDarkMode ? 'brightness(0) invert(1)' : 'brightness(1)')}; // Adjust colors for dark and light mode
  ${({ isClicked }) =>
    isClicked &&
    css`
      animation: ${shake} 0.5s;
    `}
`;

const InstructionIcon = styled.img`
  width: 100px;
  height: 50px;
  margin-top: -90px; /* Add space between the icons */
`;

const ContentContainer = styled.div`
  padding-top: 70px;
`;

const DarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(true); // Default to dark mode
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Initialize AOS
    window.AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 200, // Offset (in px) from the original trigger point
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500); // Reset the click state after the animation
  };

  return (
    <div 
      style={{ 
        background: isDarkMode ? '#000000' : 'linear-gradient(to right, #D9D9D9, #D9D9D9)', 
        color: isDarkMode ? '#ffffff' : '#000000', 
        minHeight: '100vh', 
        position: 'relative',
        margin: 0,  // Reset margin
        padding: 0, // Reset padding
      }}
    >
      <Navbar isDarkMode={isDarkMode} />

      <SwitchContainer>
        <Icon 
          src={LightBulbIcon} 
          alt="light bulb icon" 
          isDarkMode={isDarkMode} 
          isClicked={isClicked} 
          onClick={toggleDarkMode} 
          
        />
        <InstructionIcon 
          src={isDarkMode ? InstructionDarkModeIcon : InstructionLightModeIcon} 
          alt="instruction icon" 
          
        />
      </SwitchContainer>
      <ContentContainer>
        <HeroSection isDarkMode={isDarkMode} data-aos="fade-up" />
        <GridComponent isDarkMode={isDarkMode} data-aos="fade-up" />
        <Experience />
      </ContentContainer>
    </div>
  );
};

export default DarkMode;
