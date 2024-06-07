import React, { useState, useEffect } from 'react';
import image1 from '../Assets/WhatsApp Image 2024-05-13 at 10.01.00 PM (1).jpeg';
import image2 from '../Assets/WhatsApp Image 2024-05-12 at 10.03.31 PM.jpeg';
import image3 from '../Assets/WhatsApp Image 2024-06-04 at 10.04.39 PM.jpeg';
import image4 from '../Assets/WhatsApp Image 2024-06-04 at 10.04.40 PM.jpeg';
import image5 from '../Assets/WhatsApp Image 2024-06-04 at 10.04.46 PM.jpeg';
import TopImage from './ArrowDown'; // Import the TopImage component
import BlurryImage from './BlurryImg';
import OrbitAnimation from './OrbitSolar';
import CertifyText from './CertifyText';
import { BsBorder } from 'react-icons/bs';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

    useEffect(() => {
        const handleDarkModeToggle = () => {
            setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
        };

        handleDarkModeToggle(); // Initial check
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleDarkModeToggle);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleDarkModeToggle);
        };
    }, []);

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative mt-4">
            {/* Image at the top */}
            <div className="relative top-0 left-0 ml-16">
                <TopImage isDarkMode={isDarkMode} /> {/* Pass the dark mode state */}
            </div>

            {/* Carousel wrapper */}
            <div className="w-60 h-40 ml-20 relative max-w-full mx-auto dark:bg-gray-800 "> {/* Added mx-auto to center the component */}
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{ display: index === activeIndex ? 'block' : 'none' }}
                            data-carousel-item
                        >
<img 
  src={src} 
  className="h-auto max-w-full border-4" 
  style={{ 
    maxWidth: '100%', 
    maxHeight: '100%', 
    border: '4px solid #6A0DAD' 
  }} 
  alt={`Slide ${index + 1}`} 
/>
                        </div>
                    ))}
                </div>

                {/* Slider controls */}
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center pointer-events-none">
                    <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center bg-transparent hover:bg-white/50 focus:outline-none pointer-events-auto rounded-full border-2 border-purple-500"
                        onClick={handlePrev}
                        style={{ 
                         marginLeft: '-40px',  // Add comma here
                         border: '2px solid #6A0DAD'  // Ensure proper border syntax
                         }} 
                    >
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={isDarkMode ? 'white' : 'black'} viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center bg-transparent hover:bg-white/50 focus:outline-none pointer-events-auto rounded-full border-2 "
                        onClick={handleNext}
                        style={{ 
                         marginRight: '-20px',  // Add comma here
                         border: '2px solid #6A0DAD'  // Ensure proper border syntax
                        }} 
                    >
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={isDarkMode ? 'white' : 'black'} viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* BlurryImage component */}
            <BlurryImage />

            {/* OrbitAnimation component */}
            <div className="orbit-animation-container">
                <OrbitAnimation />
            </div>
            <div className='absolute top-0 right-0 mr-4 mt-4'>
            <CertifyText isDarkMode={isDarkMode} />
            </div>
        </div>
    );
};

export default Carousel;
