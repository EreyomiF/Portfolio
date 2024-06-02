import React from 'react';
import styled from 'styled-components';
import Image from '../Assets/myimage-no-bg.png';
import TextType from './TextType';
import IconsRow from './HomeSvg';

const Section = styled.section`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#000000' : '#aaaaaa')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  padding-top: 0;
  margin-top: -70px;
`;

const Title = styled.h1`
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  color: ${({ isDarkMode }) => (isDarkMode ? '#bbbbbb' : '#555555')};
  margin-bottom: 24px;
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1a1a1a' : '#D9D9D9')};
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
    isDarkMode
      ? 'radial-gradient(circle, transparent -30%, #000000 70%)'
      : 'radial-gradient(circle, transparent -30%, #aaaaaa 60%)'};
`;

const TypingContainer = styled.p`
  height: 2em;
  overflow: hidden;
  font-weight: 600;
  font-size: 1.875rem;
  text-align: end;
  margin-bottom: -0.5rem; /* Reduced margin-bottom */
`;

const HeroSection = ({ isDarkMode }) => {
  return (
    <Section isDarkMode={isDarkMode} className="py-4 lg:py-8">
      <div className={`grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 ${isDarkMode ? 'dark' : ''}`}>
        <div className="lg:col-span-5">
          <StyledImageContainer isDarkMode={isDarkMode}>
            <StyledImage src={Image} alt="mockup" isDarkMode={isDarkMode} />
            <StyledOverlay isDarkMode={isDarkMode} />
          </StyledImageContainer>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 mt-20">
          <TypingContainer className="hello font-light">
            <TextType />
          </TypingContainer>
          <Title
            isDarkMode={isDarkMode}
            className="max-w-2xl mb-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
          >
            I AM <span className="text-purple-700">EREYOMI FUNMILOLA</span>
          </Title>
          <Paragraph
            isDarkMode={isDarkMode}
            className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-end"
          >
            I am a graduate of International Relations with a strong passion for software development.
            Combining my understanding of global dynamics with technical expertise, I bring a unique
            perspective to my work in the tech industry. I thrive on solving complex problems and creating
            innovative solutions, always eager to learn and grow in this ever-evolving field. Whether it's
            through coding or global policy analysis, I'm driven by a desire to make a meaningful impact.
          </Paragraph>
          <a
            href="#"
            className="inline-flex items-center justify-center px-0 py-0 mr-3 text-xs font-medium text-center border-4 border-purple-700 rounded-full hover:bg-purple-700 hover:text-white focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 shadow-md font-black"
            style={{ backgroundColor: 'transparent' }}
          >
            RESUME
            <svg
              style={{
              color: isDarkMode ? '#ffffff' : '#000000',
            }}

              className="w-4 h-4  ml-0 font-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
              />
            </svg>
          </a>
          <div
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center   dark:text-white "
            style={{
              color: isDarkMode ? '#ffffff' : '#ffffff',
            }}
          >
            <IconsRow
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
