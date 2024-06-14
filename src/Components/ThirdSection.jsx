import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import ProjectData from '../Projects'; // Import the project data
import 'aos/dist/aos.css';
import AOS from 'aos';
import ProjectArrow from './ProjectArrow';

const ProjectGrid = ({ isDarkMode }) => {
    useEffect(() => {
        AOS.init({
            duration: 4000,
            once: false,
            offset: 200,
        });
    }, []);

    return (
        <div className={`flex flex-col items-center mt-16 mb-16 ${isDarkMode ? 'dark' : ''}`}>
            <ProjectArrow />
            <div className="mb-8 text-center">
                <h1 className="text-3xl lg:text-4xl underline hello mb-4 mt-6 text-center text-purple-700">Projects</h1>
                <p className="text-gray-700 dark:text-gray-300 text-center ">
                    Following projects showcase my skills and experience through real-world 
                     examples of my work. Each project is briefly described with links to the websites.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 max-w-screen-lg">
                {ProjectData.map((project, index) => {
                    const aosType = (index % 2 === 0) ? 'fade-right' : 'fade-left';
                    return (
                        <ProjectCard 
                            key={project.id} 
                            {...project} 
                            aosType={aosType} 
                            isDarkMode={isDarkMode} // Pass the isDarkMode prop
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectGrid;
