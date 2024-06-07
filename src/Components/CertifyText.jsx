import React from 'react';
import arrow3 from '../Assets/arrow svg.png';

const CertifyText = ({ isDarkMode }) => {
  return (
    <div className="max-w-sm p-6 text-center container">
      <p className="mr-60  hello relative text-sm transform translate-y-[50px]">My qualifications</p> {/* Move caption up */}
      <img
        src={arrow3}
        alt="Top Image"
        className={`image ${isDarkMode ? 'dark-mode' : 'light-mode'} ml-20`} // Adjust width and height
        style={{ marginBottom: '-0.8rem' }} // Decrease the bottom margin
      />
      <div className="text-content">
        <h5 className="text-2xl font-semibold tracking-tight underline dark:text-white mt-1"> {/* Adjust the top margin */}
          BACHELOR OF ARTS
        </h5>
        <p className="mb-0 text-sm">
          History and International Relations
        </p>
        <p className="mb-0 text-sm">
          2017-2022
        </p>
      </div>
    </div>
  );
};

export default CertifyText;
