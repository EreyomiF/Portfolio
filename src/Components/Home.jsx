import React from 'react';
import styled from 'styled-components';
import Image from '../Assets/myimage-no-bg.png';

const Section = styled.section`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#000000' : '#888888')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  padding-top: 0; /* Adjust padding-top to move content up */
  margin-top: -70px; /* Move the entire section up */
`;

const Title = styled.h1`
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  margin-bottom: 16px; /* Adjust margin-bottom if needed */
`;

const Paragraph = styled.p`
  color: ${({ isDarkMode }) => (isDarkMode ? '#bbbbbb' : '#555555')};
  margin-bottom: 24px; /* Adjust margin-bottom if needed */
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1a1a1a' : '#888888')};
  @media (max-width: 1024px) {
    max-width: 300px;
    margin: auto;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  filter: ${({ isDarkMode }) => (isDarkMode ? 'brightness(50%)' : 'brightness(80%) grayscale(50%)')};
  opacity: ${({ isDarkMode }) => (isDarkMode ? '0.7' : '1')};
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ isDarkMode }) => 
    isDarkMode ? 
    'radial-gradient(circle, transparent 30%, black 70%)' : 
    'radial-gradient(circle, transparent -70%, #888888 80%)'};
`;

const HeroSection = ({ isDarkMode }) => {
  return (
    <Section isDarkMode={isDarkMode} className="py-4 lg:py-8 "> {/* Adjust padding here */}
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <StyledImageContainer isDarkMode={isDarkMode}>
            <StyledImage 
              src={Image} 
              alt="mockup" 
              isDarkMode={isDarkMode}
            />
            <StyledOverlay isDarkMode={isDarkMode} />
          </StyledImageContainer>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 mt-20">
          <Title isDarkMode={isDarkMode} className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Payments tool for software companies
          </Title>
          <Paragraph isDarkMode={isDarkMode} className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
          </Paragraph>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg 
              className="w-5 h-5 ml-2 -mr-1" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            style={{
              color: isDarkMode ? '#ffffff' : '#000000',
              borderColor: isDarkMode ? '#444444' : '#cccccc',
              backgroundColor: isDarkMode ? '#333333' : '#ffffff',
            }}
          >
            Speak to Sales
          </a> 
        </div>                
      </div>
    </Section>
  );
};

export default HeroSection;
