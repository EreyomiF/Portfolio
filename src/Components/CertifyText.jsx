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
            alt="Top Image"
            className={`image ${isDarkMode ? 'dark-mode' : 'light-mode'} ml-20`}
            style={{ marginBottom: '-1rem', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            MASTERS OF ARTS <br /> Catholic University of Portugal 
          </h5>
          <p className="mb-0 text-xs">
          Governance , Leadership and Democracy Studies 
          </p>
          <p className="mb-0 text-xs">
         2024-Present
         </p>
        </div>

        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            BACHELOR OF ARTS <br /> Federal university Oye-Ekiti
          </h5>
          <p className="mb-0 text-xs">
            History and International Relations
          </p>
          <p className="mb-0 text-xs">
            2017-2022
          </p>
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
          TROCAH TECHNOLOGY LIMITED <br /> 128 city Road, London, United Kingdom, EC1V 2NX
          </h5>
          <p className="mb-0 text-xs">Front-end Developer</p>
          <p className="mb-0 text-xs">2023-Present</p>
        </div>

        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            THINK ELOQUENTLY <br /> Lagos Nigeria
          </h5>
          <p className="mb-0 text-xs">Internship Completion Certification</p>
          <p className="mb-0 text-xs">2021-2023</p>
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            INTERN CHOICE <br /> India Remote
          </h5>
          <p className="mb-0 text-xs">
            Web development Internship <br /> Certificate
          </p>
          <p className="mb-0 text-xs">2023</p>
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            UDEMY INC. <br /> Remote
          </h5>
          <p className="mb-0 text-xs">
            Full Stack Web development <br />
            Bootcamp
          </p>
          <p className="mb-0 text-xs">2022-2023</p>
        </div>
        <div className="text-content mt-4 text-center">
          <h5 className="text-lg font-semibold tracking-tight underline dark:text-white">
            UDEMY INC. <br /> Remote
          </h5>
          <p className="mb-0 text-xs">React J.S Course Completion</p>
          <p className="mb-0 text-xs">2023-present</p>
        </div>
      </div>
    </div>
  );
};

export default CertifyText;
