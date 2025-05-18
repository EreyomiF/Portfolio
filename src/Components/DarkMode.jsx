import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import LightBulbIcon from '../Assets/light bulb (1).png';
import HeroSection from './Home';
import InstructionLightModeIcon from '../Assets/Group (1).png';
import InstructionDarkModeIcon from '../Assets/Group.png';
import Navbar from './HeroNav';
import GridComponent from './SecondSection';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Experience from './WorkExperience';
import ContactForm from './ContactForm';
import ProjectGrid from './ThirdSection';
import Footer from './Footer';
import { motion } from 'framer-motion';
import WorkTogether from './WorkTogether';


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
  left: 300px; /* Default for larger screens */
  flex-direction: column;
  z-index: 10;

  @media (max-width: 768px) { /* md screens and below, adjust left */
    left: 200px; 
  }

  @media (max-width: 640px) { /* sm breakpoint */
    top: 73px;
    left: 50%; /* Center the container */
    transform: translateX(-50%); /* Correct for centering with left: 50% */
    width: auto; /* Allow it to size based on content */
  }
`;

const Icon = styled.img`
  width: 200px; /* Default width for larger screens */
  height: 200px; /* Default height for larger screens */
  margin: 0 10px;
  cursor: pointer;
  filter: ${({ isDarkMode }) => (isDarkMode ? 'brightness(0) invert(1)' : 'brightness(1)')};
  ${({ isClicked }) =>
    isClicked &&
    css`
      animation: ${shake} 0.5s;
    `}

  /* Media query for medium-small screens */
  @media (max-width: 640px) { /* sm breakpoint */
    width: 120px; 
    height: 120px; 
    margin: 0 5px; 
  }

  /* Media query for very small screens (320px and below) */
  @media (max-width: 360px) { /* Adjusted breakpoint for more specific control */
    width: 110px;  /* Increased from 100px */
    height: 110px; /* Increased from 100px */
  }
`;

const InstructionIcon = styled.img`
  width: 100px; /* Default width */
  height: 50px; /* Default height */
  margin-top: -90px; /* Default margin for larger icon above (200px icon) */

  /* Media query for medium-small screens */
  @media (max-width: 640px) { /* sm breakpoint (120px icon) */
    width: 80px; 
    height: 40px;
    margin-top: -60px; /* Adjusted for 120px lightbulb */
  }

  /* Media query for very small screens (320px and below) */
  @media (max-width: 360px) { /* Adjusted breakpoint (110px icon) */
    width: 70px;
    height: 35px;
    margin-top: -55px; /* Adjusted for 110px lightbulb */
  }
`;



const Section = styled.div`
  margin: 20px 0;
`;

const DarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 200,
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <div
      style={{
        background: isDarkMode ? '#000000' : 'linear-gradient(to right, #D9D9D9, #D9D9D9)',
        color: isDarkMode ? '#ffffff' : '#000000',
        minHeight: '100vh',
        position: 'relative', 
        margin: 0,
        padding: 0, 
        overflowX: 'hidden', 
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
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      > 
        <ContentContainer>
            <HeroSection isDarkMode={isDarkMode} data-aos="fade-up" />
          <Section>
            <GridComponent isDarkMode={isDarkMode} data-aos="fade-up" />
          </Section>
          <Section>
            <Experience isDarkMode={isDarkMode} data-aos="fade-right" />
          </Section>
          <Section>
            <ProjectGrid isDarkMode={isDarkMode} data-aos="fade-left" />
          </Section>
          <Section>
            <WorkTogether isDarkMode={isDarkMode} data-aos="fade-right" />
          </Section>

            <ContactForm isDarkMode={isDarkMode} data-aos="fade-down" />
          <Footer isDarkMode={isDarkMode} />
        </ContentContainer>
      </motion.div>
    </div>
    
  );
};

export default DarkMode;
