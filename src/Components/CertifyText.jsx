import React from 'react';
import arrow3 from '../Assets/arrow svg.png';

const CertifyText = ({ isDarkMode }) => {
  return (
    <div className="max-w-sm p-6 text-left flex-shrink-0 w-full mx-auto md:w-full lg:w-auto lg:flex-grow-0 mt-8 md:mt-0">
      <div className="lg:text-center">
        <div className="text-center mb-4 -mt-8">
          <p className="hello relative text-sm transform translate-y-[55px] mr-40">My qualifications</p>
          <img
            src={arrow3}
            alt=""
            className={`image ${isDarkMode ? 'dark-mode' : 'light-mode'} ml-20`}
            style={{ marginBottom: '-1rem', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            MASTER OF ARTS <br /> Universidade Catolica Portuguesa
          </h5>
          <p className="mb-0 text-xs">
            Leadership, Governance and Democracy Studies
          </p>
          <p className="mb-0 text-xs">
            Sep 2024 - Present
          </p>
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            BACHELOR OF ARTS <br /> Federal University of Oye-Ekiti
          </h5>
          <p className="mb-0 text-xs">
            International Relations - CGPA 3.50 / 5.00 (Second Class Upper)
          </p>
          <p className="mb-0 text-xs">
            Aug 2017 - Dec 2021
          </p>
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            PHR EXAM PREPARATION <br /> HRCI via Udemy
          </h5>
          <p className="mb-0 text-xs">
            Human Resources Certification
          </p>
          <p className="mb-0 text-xs">
            Jul 2026
          </p>
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            IT RECRUITERS BOOTCAMP <br /> Udemy
          </h5>
          <p className="mb-0 text-xs">
            Mastering the Art of Tech Hiring - 8 hrs
          </p>
          <p className="mb-0 text-xs">
            Jun 2026
          </p>
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            RECRUITER TRAINING <br /> Udemy
          </h5>
          <p className="mb-0 text-xs">
            Talent Acquisition, Beginner to Advanced - 10 hrs
          </p>
          <p className="mb-0 text-xs">
            Jun 2026
          </p>
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            LEARNING AND DEVELOPMENT <br /> HRCI authorized course via Coursera
          </h5>
          <p className="mb-0 text-xs">
            Talent development and training design
          </p>
          <p className="mb-0 text-xs">
            Jun 2026
          </p>
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            FULL-STACK WEB DEVELOPMENT <br /> Udemy
          </h5>
          <p className="mb-0 text-xs">
            The Complete Bootcamp - 61.5 hrs
          </p>
          <p className="mb-0 text-xs">
            Nov 2025
          </p>
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            FRONTEND DEVELOPER INTERNSHIP <br /> Intern Choice, India
          </h5>
          <p className="mb-0 text-xs">
            Internship completion certificate
          </p>
          <p className="mb-0 text-xs">
            Dec 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertifyText;
