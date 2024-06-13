import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import ProjectData from '../Projects'; // Import the project data
import 'aos/dist/aos.css';
import AOS from 'aos';
import ProjectArrow from './ProjectArrow';

const ProjectGrid = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 200,
        });
    }, []);

    return (
        <div className="flex flex-col items-center mt-16 mb-16">
          <ProjectArrow />
            <h1 className="text-3xl lg:text-4xl underline hello mb-16 mt-6 text-center text-purple-700">Projects</h1>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 max-w-screen-lg">
                {ProjectData.map((project, index) => {
                    const aosType = (index % 2 === 0) ? 'fade-right' : 'fade-left';
                    return (
                        <ProjectCard 
                            key={project.id} 
                            {...project} 
                            aosType={aosType} 
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectGrid;
