import React, { useState, useEffect } from 'react';
// Assuming image imports are correct
import image1 from '../Assets/WhatsApp Image 2024-05-13 at 10.01.00 PM (1).jpeg';
import image2 from '../Assets/WhatsApp Image 2024-05-12 at 10.03.31 PM.jpeg';
import image3 from '../Assets/WhatsApp Image 2024-06-04 at 10.04.39 PM.jpeg';
import image4 from '../Assets/WhatsApp Image 2024-06-04 at 10.04.40 PM.jpeg';
import image5 from '../Assets/WhatsApp Image 2024-06-04 at 10.04.46 PM.jpeg';
import TopImage from './ArrowDown'; // Import the TopImage component

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const handleDarkModeToggle = (event) => {
            setIsDarkMode(event.matches);
        };

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkModeMediaQuery.matches); // Initial check
        darkModeMediaQuery.addEventListener('change', handleDarkModeToggle);

        return () => {
            darkModeMediaQuery.removeEventListener('change', handleDarkModeToggle);
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
        // Main container for the entire carousel section
        <div className="relative mt-4 flex flex-col items-center w-full px-2 sm:px-4"> {/* Added a bit more padding for button space */}
            {/* Top Image (ArrowDown) */}
            <div className="relative flex justify-center w-full md:-ml-[100px] mb-4"> {/* Added mb-4 for space */}
                <TopImage isDarkMode={isDarkMode} />
            </div>

            {/* New container for the row: Prev Button + Carousel Slides + Next Button */}
            {/* items-center to vertically align button and slides */}
            {/* justify-center to center the whole group if it's narrower than parent, or use w-full */}
            <div className="flex items-center justify-center w-full">
                {/* Prev Button */}
                {/* Added mr-2 sm:mr-4 for spacing between button and carousel */}
                <button
                    type="button"
                    className="w-8 h-8 md:w-12 md:h-12 lg:w-8 lg:h-8 flex-shrink-0 flex items-center justify-center bg-transparent hover:bg-white/30 dark:hover:bg-black/30 focus:outline-none pointer-events-auto rounded-full border-2 border-purple-700 mr-2 sm:mr-4"
                    onClick={handlePrev}
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-4 lg:h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={isDarkMode ? 'white' : 'black'} viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                    </svg>
                </button>

                {/* Container for the carousel slides */}
                {/* Adjusted max-width and height for md and lg screens */}
                {/* flex-grow to allow it to take space, but max-width will constrain it */}
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[400px] h-48 sm:h-[200px] md:h-[300px] lg:h-[200px] relative dark:bg-gray-800 p-0 m-0">
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                        {images.map((src, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        >
                            <img
                            src={src}
                            className="w-full h-full object-cover"
                            style={{
                                border: '4px solid #6A0DAD',
                                boxSizing: 'border-box',
                            }}
                            alt={`Slide ${index + 1}`}
                            />
                        </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                {/* Added ml-2 sm:ml-4 for spacing between carousel and button */}
                <button
                    type="button"
                    className="w-8 h-8 md:w-12 md:h-12 lg:w-8 lg:h-8 flex-shrink-0 flex items-center justify-center bg-transparent hover:bg-white/30 dark:hover:bg-black/30 focus:outline-none pointer-events-auto rounded-full border-2 border-purple-700 ml-2 sm:ml-4"
                    onClick={handleNext}
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-4 lg:h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={isDarkMode ? 'white' : 'black'} viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
