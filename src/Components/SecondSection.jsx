import React from 'react';
import CertifyText from './CertifyText';
import MyHobby from './MyHobby';
import BlurryImage from './BlurryImg';
import Carousel from './MyCertificate';
import OrbitAnimation from './OrbitSolar';

const GridComponent = ({ isDarkMode }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8">
            {/* Left grid */}
            <div className="col-span-1 lg:col-span-2 flex flex-col justify-start items-center w-full mx-auto relative">
                {/* First image on the left */}
                <Carousel />
                <div className="w-full flex justify-center mt-8">
                    <OrbitAnimation isDarkMode={isDarkMode} />
                </div>
            </div>
            {/* Center grid */}
            <div className="col-span-1 lg:col-span-1 flex justify-center items-start w-full mx-auto mt-8 lg:mt-40">
                {/* Image in the center */}
                <BlurryImage isDarkMode={isDarkMode} />
            </div>
            {/* Right grid */}
            <div className="col-span-1 lg:col-span-2 flex flex-col justify-start items-center w-full mx-auto">
                {/* First content on the right */}
                <CertifyText isDarkMode={isDarkMode} />
                {/* Second content on the right */}
                <MyHobby isDarkMode={isDarkMode} />
            </div>
        </div>
    );
};

export default GridComponent;
