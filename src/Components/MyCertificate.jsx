import React, { useState } from 'react';
// Photographed certificates
import image1 from '../Assets/WhatsApp Image 2024-05-13 at 10.01.00 PM (1).jpeg';
import image2 from '../Assets/WhatsApp Image 2024-05-12 at 10.03.31 PM.jpeg';
import image5 from '../Assets/WhatsApp Image 2024-06-04 at 10.04.46 PM.jpeg';
// LinkedIn Learning
import certBecomeTechRecruiter from '../Assets/cert-linkedin-become-a-tech-recruiter.jpg';
import certGenAiForRecruiting from '../Assets/cert-linkedin-generative-ai-for-recruiting.jpg';
import certGenAiRecruitingTa from '../Assets/cert-linkedin-generative-ai-recruiting-ta.jpg';
import certTechRecruitingFoundations1 from '../Assets/cert-linkedin-tech-recruiting-foundations-1.jpg';
import certTechRecruitingFoundations2 from '../Assets/cert-linkedin-tech-recruiting-foundations-2.jpg';
// Udemy / HRCI
import certHrciPhr from '../Assets/cert-udemy-hrci-phr.jpg';
import certItRecruitersBootcamp from '../Assets/cert-udemy-it-recruiters-bootcamp.jpg';
import certRecruiterTraining from '../Assets/cert-udemy-recruiter-training.jpg';
import certFullstackWebDev from '../Assets/cert-udemy-fullstack-web-dev.jpg';
import certHrciLearningDevelopment from '../Assets/cert-hrci-learning-and-development.jpg';
// Academic
import certIumGeopolitics from '../Assets/cert-ium-geopolitics-workshop.jpg';
import certUcpPoliticalStudies from '../Assets/cert-ucp-political-studies-meeting.jpg';
import TopImage from './ArrowDown'; // Import the TopImage component

const Carousel = ({ isDarkMode }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        { src: certBecomeTechRecruiter, alt: 'Become a Tech Recruiter - LinkedIn Learning learning path certificate' },
        { src: certGenAiForRecruiting, alt: 'Generative AI for Recruiting Professional Certificate - LinkedIn Learning' },
        { src: certGenAiRecruitingTa, alt: 'Generative AI, Recruiting, and Talent Acquisition - LinkedIn Learning certificate' },
        { src: certTechRecruitingFoundations1, alt: 'Tech Recruiting Foundations 1: Introduction - LinkedIn Learning certificate' },
        { src: certTechRecruitingFoundations2, alt: 'Tech Recruiting Foundations 2: Understanding Hardware and Operating Systems - LinkedIn Learning certificate' },
        { src: certHrciPhr, alt: 'Professional in Human Resources (HRCI PHR) Certification - Udemy certificate' },
        { src: certItRecruitersBootcamp, alt: 'IT Recruiters Bootcamp: Mastering the Art of Tech Hiring - Udemy certificate' },
        { src: certRecruiterTraining, alt: 'Recruiter Training: Talent Acquisition Beginner to Advanced - Udemy certificate' },
        { src: certHrciLearningDevelopment, alt: 'Learning and Development - HRCI authorized course via Coursera certificate' },
        { src: certIumGeopolitics, alt: 'The New Conflictuality, the (New) European Geopolitics workshop - Instituto Universitario Militar certificate' },
        { src: certFullstackWebDev, alt: 'The Complete Full-Stack Web Development Bootcamp - Udemy certificate' },
        { src: certUcpPoliticalStudies, alt: 'XXXIII International Meeting for Political Studies - Universidade Catolica Portuguesa certificate of participation' },
        { src: image1, alt: 'National Youth Service Corps certificate of national service' },
        { src: image2, alt: 'Bachelor of Arts degree certificate - Federal University Oye-Ekiti' },
        { src: image5, alt: 'Statement of result, BA History and International Studies - Federal University Oye-Ekiti' },
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
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
                    aria-label="Previous certificate"
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
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[400px] h-48 sm:h-[200px] md:h-[300px] lg:h-[220px] relative dark:bg-gray-800 p-0 m-0">
                    <div
                        className="relative w-full h-full overflow-hidden rounded-lg bg-white dark:bg-gray-900"
                        style={{
                            border: '4px solid #6A0DAD',
                            boxSizing: 'border-box',
                        }}
                    >
                        {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        >
                            <img
                            src={slide.src}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            className="w-full h-full object-contain"
                            alt={slide.alt}
                            />
                        </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                {/* Added ml-2 sm:ml-4 for spacing between carousel and button */}
                <button
                    type="button"
                    aria-label="Next certificate"
                    className="w-8 h-8 md:w-12 md:h-12 lg:w-8 lg:h-8 flex-shrink-0 flex items-center justify-center bg-transparent hover:bg-white/30 dark:hover:bg-black/30 focus:outline-none pointer-events-auto rounded-full border-2 border-purple-700 ml-2 sm:ml-4"
                    onClick={handleNext}
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-4 lg:h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={isDarkMode ? 'white' : 'black'} viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                    </svg>
                </button>
            </div>

            {/* Slide counter */}
            <p className="mt-2 text-xs text-purple-700 dark:text-purple-400" aria-live="polite">
                {activeIndex + 1} / {slides.length}
            </p>
        </div>
    );
};

export default Carousel;
