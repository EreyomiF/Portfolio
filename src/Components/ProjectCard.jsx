import React from 'react';

const ProjectCard = ({ imgSrc, title, description, link, aosType, isDarkMode }) => {
    return (
        <div 
            className={`max-w-sm mx-auto rounded-lg ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
            data-aos={aosType}
            style={{ width: '100%' }} // Ensure the card takes full width
        >
            <a href={link}>
                <img 
                    className="rounded-t-lg w-full h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" 
                    src={imgSrc} 
                    alt="" 
                    style={{ backgroundColor: 'transparent', maxHeight: '200px' }} // Example max height for image
                />
            </a>
            <div className={`p-5 rounded-b-lg  shadow-xl ${isDarkMode ? 'bg-black' : 'bg-gray-200'}`}>
                <a href={link}>
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {title}
                    </h5>
                </a>
                <p className={`mb-3 font-normal ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {description}
                </p>
                <a 
                    href={link} 
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none ${isDarkMode ? 'bg-purple-900 hover:bg-purple-800 focus:ring-purple-800' : 'bg-purple-700 hover:bg-purple-800 focus:ring-purple-300'}`}
                >
                    View
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
