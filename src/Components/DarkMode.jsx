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
  flex-direction: column;
  z-index: 10;

  @media (max-width: 640px) {
    top: 73px;
    left: 300px;
  }
`;

const Icon = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 10px;
  cursor: pointer;
  filter: ${({ isDarkMode }) => (isDarkMode ? 'brightness(0) invert(1)' : 'brightness(1)')};
  ${({ isClicked }) =>
    isClicked &&
    css`
      animation: ${shake} 0.5s;
    `}
`;

const InstructionIcon = styled.img`
  width: 100px;
  height: 50px;
  margin-top: -90px;
`;

const ContentContainer = styled.div`
  padding-top: 70px;
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
        <Section>
          <GridComponent isDarkMode={isDarkMode} data-aos="fade-up" />
        </Section>
        <Section>
          <Experience />
        </Section>
        <Section>
          <ProjectGrid />
        </Section>
        <Section>
          <ContactForm isDarkMode={isDarkMode} />
        </Section>
      </ContentContainer>
    </div>
  );
};

export default DarkMode;
