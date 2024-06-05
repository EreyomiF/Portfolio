import React, { useState } from 'react';
import image1 from '../Assets/WhatsApp Image 2024-05-13 at 10.01.00 PM (1).jpeg';
import image2 from '../Assets/WhatsApp Image 2024-05-12 at 10.03.31 PM.jpeg';
import image3 from '../Assets/WhatsApp Image 2024-06-04 at 10.04.39 PM.jpeg';
import image4 from '../Assets/WhatsApp Image 2024-06-04 at 10.04.40 PM.jpeg';
import image5 from '../Assets/WhatsApp Image 2024-06-04 at 10.04.46 PM.jpeg';
import ArrowImage from "../Assets/arrow11.png";

const Carousel = ({ isDarkMode }) => {
    const [activeIndex, setActiveIndex] = useState(0);
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
        <div className="mt-8 ml-4 w-80 h-60 relative max-w-full"> {/* Adjusted left margin */}
            {/* Image at the top */}
            <img src={ArrowImage} alt="Top Image" className="mb-4" style={{ filter: isDarkMode ? '' : 'brightness(0) invert(10)' }} />

            {/* Carousel wrapper */}
            <div className="relative w-full h-full overflow-hidden rounded-lg">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{ display: index === activeIndex ? 'block' : 'none' }}
                        data-carousel-item
                    >
                        <img src={src} className="h-auto max-w-full border-4 border-purple-500" style={{ maxWidth: '100%', maxHeight: '100%' }} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Slider controls */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center pointer-events-none">
                <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-white/50 focus:outline-none pointer-events-auto rounded-full border-2 border-purple-500"
                    onClick={handlePrev}
                    style={{ marginLeft: '-50px' }} // Increase space between left arrow and carousel
                >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                    </svg>
                </button>
                <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-white/50 focus:outline-none pointer-events-auto rounded-full border-2 border-purple-500"
                    onClick={handleNext}
                    style={{ marginRight: '-50px' }} // Increase space between right arrow and carousel
                >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
