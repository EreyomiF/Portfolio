import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      // Show scroll indicator when scrolled below 80% of the document height
      setShowScrollIndicator(scrollPosition > (documentHeight - windowHeight) * 0.8);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    // Smooth scroll to the bottom of the page
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 transition-opacity duration-300 ${showScrollIndicator ? 'opacity-100' : 'opacity-0'}`}>
      <button onClick={handleScrollDown} className="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4.83a.5.5 0 01.7-.12l3.53 2.12V7.83a.5.5 0 011 0v7.34l3.53-2.12a.5.5 0 11.59.81l-4 2.4a.5.5 0 01-.59 0l-4-2.4a.5.5 0 01-.3-.69z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollIndicator;
