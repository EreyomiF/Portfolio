import React from 'react';
import styled from 'styled-components';
import Image from '../Assets/IMG_5708__copy_-removebg-preview.png'; // Ensure this path is correct
import TextType from './TextType'; // Ensure this component exists and is correctly imported
import IconsRow from './HomeSvg'; // Ensure this component exists and is correctly imported
import 'aos/dist/aos.css';
// import AOS from 'aos'; // Uncomment if you initialize AOS here

const Section = styled.section`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#000000' : '#F5F5F5')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  padding-top: 0;
  /* The negative margin to pull the section up is now applied via Tailwind in the JSX */
`;

const Title = styled.h1`
  margin-top: 0; /* Ensures no default top margin */
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  margin-bottom: 16px; /* Default margin-bottom */
  overflow: hidden;
  text-overflow: ellipsis;

  /* Responsive margin-bottom for better scaling */
  @media (min-width: 1024px) { /* lg */
    margin-bottom: 1.5rem; /* 24px */
  }
  @media (min-width: 1536px) { /* 2xl */
    margin-bottom: 2rem; /* 32px */
  }
`;

const Paragraph = styled.p`
  color: ${({ isDarkMode }) => (isDarkMode ? '#bbbbbb' : '#555555')};
  margin-bottom: 24px; /* Default margin-bottom */

  /* Responsive margin-bottom */
  @media (min-width: 1024px) { /* lg */
    margin-bottom: 2rem; /* 32px */
  }
  @media (min-width: 1536px) { /* 2xl */
    margin-bottom: 2.5rem; /* 40px */
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%; /* Takes full width of its column */
  
  max-width: 300px; /* Mobile first */
  margin: 0 auto 1rem auto; /* Centering and bottom margin for stacked mobile view */
  
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1a1a1a' : '#D9D9D9')}; /* Overridden by inline style if present */
  overflow: hidden;

  @media (min-width: 768px) { /* md */
    max-width: 400px;
  }
  @media (min-width: 1024px) { /* lg and up - when side-by-side */
    max-width: 500px;
    margin: 0; /* Reset margin for side-by-side view */
  }
  @media (min-width: 1280px) { /* xl */
    max-width: 550px;
  }
  @media (min-width: 1536px) { /* 2xl */
    max-width: 600px;
  }
  @media (min-width: 3000px) { /* 3xl - custom breakpoint */
    max-width: 750px; 
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  filter: ${({ isDarkMode }) =>
    isDarkMode
      ? 'brightness(20%)'
      : 'grayscale(100%) brightness(180%) blur(1px) opacity(85%) contrast(30%)'
  };
  opacity: ${({ isDarkMode }) => (isDarkMode ? '0.7' : '1')};
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#F5F5F5')};
  mask-image:
    linear-gradient(to right, black 0%, transparent 25%),
    linear-gradient(to left, black 0%, transparent 25%),
    linear-gradient(to bottom, black 0%, transparent 25%),
    linear-gradient(to top, black 0%, transparent 25%);
  -webkit-mask-image:
    linear-gradient(to right, black 0%, transparent 25%),
    linear-gradient(to left, black 0%, transparent 25%),
    linear-gradient(to bottom, black 0%, transparent 25%),
    linear-gradient(to top, black 0%, transparent 25%);
`;

const TypingContainer = styled.p`
  margin-top: 0; 
  height: auto; 
  min-height: 2em; 
  overflow: hidden;
  font-weight: 600;
  font-size: 1.5rem; 
  margin-bottom: -0.5rem; 
  text-align: end;

  @media (min-width: 768px) { /* md */
    font-size: 1.875rem; 
  }
  @media (min-width: 1280px) { /* xl */
    font-size: 2.25rem; 
    padding-right: 3.5rem;
  }
   @media (min-width: 1536px) { /* 2xl */
    font-size: 2.5rem; 
  }
  @media (min-width: 3000px) { /* 3xl */
    font-size: 3rem; 
    padding-right: 5rem; 
  }
`;

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.7rem; 
  text-align: center;
  border: 2px solid #805AD5;
  border-radius: 9999px;
  background-color: transparent;
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  font-weight: 900;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #6A0DAD;
    color: #ffffff;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  svg {
    margin-left: 0.25rem;
    color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
    width: 16px;
    height: 16px;
  }

  @media (min-width: 1280px) { /* xl */
    padding: 0.3rem 0.75rem;
    font-size: 0.8rem;
    svg { width: 18px; height: 18px; }
  }
  @media (min-width: 3000px) { /* 3xl */
    padding: 0.5rem 1rem;
    font-size: 1rem;
    svg { width: 20px; height: 20px; }
  }
`;

const IconsRowContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem; 

  @media (min-width: 1280px) { /* xl */
    padding-right: 3rem;
    gap: 1.5rem; 
  }
  @media (min-width: 3000px) { /* 3xl */
    padding-right: 5rem;
    gap: 2rem; 
  }
`;

const HeroSection = ({ isDarkMode }) => {
  // React.useEffect(() => {
  //  AOS.init({
  //    duration: 1000,
  //    once: true, 
  //  });
  // }, []);

  return (
    // Corrected Tailwind classes for negative margins.
    // -mt-[120px] is the default for small screens (like 320px).
    // md:-mt-8 overrides for medium screens.
    // lg:-mt-[20px] overrides for large screens.
    <Section 
      isDarkMode={isDarkMode} 
      className="py-4 lg:py-4 3xl:py-16 -mt-[120px] md:-mt-[70px] lg:-mt-[70px]"
    >
      {/* Removed -mt-[70px] from this inner grid for debugging the Section's movement.
          You can add it back if the Section itself moves up correctly. */}
      <div className={`grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-12 lg:grid-cols-12 lg:items-start 3xl:max-w-none 3xl:px-12 3xl:gap-16 ${isDarkMode ? 'dark' : ''}`}>
        
        <div className="lg:col-span-5 lg:mt-10 " data-aos="fade-down">
          <StyledImageContainer
            isDarkMode={isDarkMode}   
            style={{
              backgroundColor: isDarkMode ? 'var(--your-dark-mode-bg-color, transparent)' : '#FFFFFF', 
            }}
          >
            <StyledImage  src={Image} alt="mockup" isDarkMode={isDarkMode} />
            <StyledOverlay isDarkMode={isDarkMode} />
          </StyledImageContainer>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 text-right lg:text-left mt-4 lg:mt-60" data-aos="fade-left">
          <TypingContainer className="hello font-light">
            <TextType />
          </TypingContainer>
          <Title
            isDarkMode={isDarkMode}
            className="max-w-2xl text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold tracking-tight leading-none text-end"
          >
            I AM <span className="text-purple-700">EREYOMI FUNMILOLA</span>
          </Title>
          <Paragraph
            isDarkMode={isDarkMode}
            className="max-w-2xl font-light text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-end mt-4 md:mt-6 lg:mt-8"
          >
            I am a graduate of International Relations with a strong passion for software development.
            Combining my understanding of global dynamics with technical expertise, I bring a unique
            perspective to my work in the tech industry. I thrive on solving complex problems and creating
            innovative solutions, always eager to learn and grow in this ever-evolving field. Whether it's
            through coding or global policy analysis, I'm driven by a desire to make a meaningful impact.
          </Paragraph>
          <IconsRowContainer >
            <StyledButton href="#" isDarkMode={isDarkMode} >
              RESUME
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="12" 
                height="12"
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
            </StyledButton>
            <IconsRow />
          </IconsRowContainer>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
