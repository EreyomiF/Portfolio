import React, { useEffect } from 'react';
import CertifyText from './CertifyText';
import MyHobby from './MyHobby';
import BlurryImage from './BlurryImg';
import Carousel from './MyCertificate';
import OrbitAnimation from './OrbitSolar';
import 'aos/dist/aos.css';
import AOS from 'aos';

const GridComponent = ({ isDarkMode }) => {
    useEffect(() => {
        const applyAOS = () => {
            const isSmallScreen = window.innerWidth <= 640;

            const elementsLeft = document.querySelectorAll('.aos-left');
            const elementsRight = document.querySelectorAll('.aos-right');
            const elementsCenter = document.querySelectorAll('.aos-center');

            elementsLeft.forEach(element => {
                if (isSmallScreen) {
                    element.setAttribute('data-aos', 'fade-down-right');
                } else {
                    element.setAttribute('data-aos', 'fade-up');
                }
            });

            elementsRight.forEach(element => {
                if (isSmallScreen) {
                    element.setAttribute('data-aos', 'fade-down-left');
                } else {
                    element.setAttribute('data-aos', 'fade-up');
                }
            });

            elementsCenter.forEach(element => {
                element.setAttribute('data-aos', 'fade-up');
            });

            AOS.refresh(); // Refresh AOS to apply changes
        };

        window.addEventListener('resize', applyAOS);
        applyAOS(); // Apply AOS on initial load

        return () => {
            window.removeEventListener('resize', applyAOS);
        };
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 4000, // Animation duration in milliseconds
            easing: 'ease-out-cubic', // Easing function
            once: false, // Animation will happen every time you scroll
            anchorPlacement: 'top-bottom', // Anchor placement for elements with data-aos-anchor attribute
        });
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8 h-full overflow-hidden">
            {/* Left grid */}
            <div
                className="col-span-1 lg:col-span-2 flex flex-col justify-start items-center w-full relative aos-left"
            >
                {/* First image on the left */}
                <Carousel />
                <div className="w-full flex justify-center mt-8">
                    <OrbitAnimation isDarkMode={isDarkMode} />
                </div>
            </div>
            {/* Center grid */}
            <div
                className="col-span-1 lg:col-span-1 flex justify-center items-start w-full mt-8 lg:mt-40 aos-center"
            >
                {/* Image in the center */}
                <BlurryImage isDarkMode={isDarkMode} />
            </div>
            {/* Right grid */}
            <div
                className="col-span-1 lg:col-span-2 flex flex-col justify-start items-center w-full aos-right"
            >
                {/* First content on the right */}
                <CertifyText isDarkMode={isDarkMode} />
                {/* Second content on the right */}
                <MyHobby isDarkMode={isDarkMode} />
            </div>
        </div>
    );
};

export default GridComponent;
