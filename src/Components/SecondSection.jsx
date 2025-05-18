import React, { useEffect } from 'react';
import CertifyText from './CertifyText';
import MyHobby from './MyHobby';
import BlurryImage from './BlurryImg';
import Carousel from './MyCertificate';
import OrbitAnimation from './OrbitSolar';
import 'aos/dist/aos.css';
import AOS from 'aos';
import GridHeader from './GridHeader'; // Import the GridHeader component

const GridComponent = ({ isDarkMode }) => {
    useEffect(() => {
        const applyAOS = () => {
            const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint

            const elementsLeft = document.querySelectorAll('.aos-left');
            const elementsRight = document.querySelectorAll('.aos-right');
            const elementsCenter = document.querySelectorAll('.aos-center');

            elementsLeft.forEach(element => {
                if (isLargeScreen) {
                    // Changed from 'fade-up' to 'fade-down' for large screens
                    element.setAttribute('data-aos', 'fade-down');
                } else {
                    element.setAttribute('data-aos', 'fade-down-right');
                }
            });

            elementsRight.forEach(element => {
                if (isLargeScreen) {
                    // Changed from 'fade-up' to 'fade-down' for large screens
                    element.setAttribute('data-aos', 'fade-down');
                } else {
                    element.setAttribute('data-aos', 'fade-down-left');
                }
            });

            elementsCenter.forEach(element => {
                // Changed from 'fade-up' to 'fade-down' for large screens
                // If you want a different behavior for smaller screens for the center element,
                // you can add an else condition here.
                if (isLargeScreen) {
                    element.setAttribute('data-aos', 'fade-down');
                } else {
                    // Fallback for smaller screens for the center element (e.g., fade-up)
                    element.setAttribute('data-aos', 'fade-up'); 
                }
            });

            AOS.refresh();
        };

        AOS.init({
            duration: 1500,
            easing: 'ease-out-cubic',
            once: false,
            anchorPlacement: 'top-bottom',
        });

        window.addEventListener('resize', applyAOS);
        applyAOS(); // Apply on initial load

        return () => {
            window.removeEventListener('resize', applyAOS);
        };
    }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

    return (
        // Main container for the whole section
        <div className="w-full flex flex-col items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mb-10">
            {/* Header */}
            <GridHeader />

            {/* Grid container */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-2 lg:gap-8 mb-2 w-full lg:mt-20">
                {/* Left grid column */}
                <div
                    className="col-span-1 lg:col-span-2 flex flex-col justify-start items-center w-full relative aos-left lg:-mt-40 md:justify-center sm:justify-center"
                >
                    <div className="w-full mb-2 lg:mr-20">
                        <Carousel />
                    </div>
                    <div className="w-full flex justify-center mt-2 lg:mt-8 lg:mr-16 mx-4">
                        <OrbitAnimation isDarkMode={isDarkMode} />
                    </div>
                </div>

                {/* Center grid column */}
                <div
                    className="col-span-1 lg:col-span-1 flex flex-col justify-center items-center w-full lg:mt-20 aos-center p-4"
                >
                    <div className="w-full">
                        <div className="w-full lg:-mt-[180px] lg:mb-[120px]">
                            <MyHobby isDarkMode={isDarkMode} />
                        </div>
                        <div className=''>
                             <BlurryImage isDarkMode={isDarkMode} />
                        </div>
                    </div>
                </div>

                {/* Right grid column */}
                <div
                    className="col-span-1 lg:col-span-2 flex flex-col justify-start items-center w-full relative aos-right space-y-4 lg:space-y-12 mt-2 lg:-mt-8"
                >
                    <div className="w-full lg:ml-8">
                        <CertifyText isDarkMode={isDarkMode} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridComponent;
