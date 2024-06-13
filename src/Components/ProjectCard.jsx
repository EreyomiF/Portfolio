import React from 'react';

const ProjectCard = ({ imgSrc, title, description, link, aosType, isDarkMode }) => {
    return (
        <div 
            className="max-w-sm mx-auto border border-gray-200 rounded-lg shadow"
            data-aos={aosType}
        >
            <a href={link}>
                <img className="rounded-t-lg" src={imgSrc} alt="" />
            </a>
            <div className="p-5">
                <a href={link}>
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'} dark:text-white`}>{title}</h5>
                </a>
                <p className={`mb-3 font-normal ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} dark:text-gray-400`}>{description}</p>
                <a href={link} className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ${isDarkMode ? 'bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800' : 'bg-purple-700 hover:bg-purple-800 focus:ring-purple-300'}`}>
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
