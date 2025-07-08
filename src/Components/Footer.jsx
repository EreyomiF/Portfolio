import React, { useState, useEffect } from 'react';
import centerLogo from '../Assets/cartoon.png'; // adjust path

const Footer = ({ isDarkMode }) => {
  const [showFooter, setShowFooter] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setShowFooter(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer
      className={`
        fixed bottom-0 left-0 w-full z-10
        transition-opacity duration-500
        ${showFooter ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        ${isDarkMode ? 'bg-black' : 'bg-white'}
        border-t border-purple-700 border-opacity-65 shadow-xl
        h-30 md:h-30 overflow-visible 
      `}
    >
      {/* Image overlapping the top center */}
{/* Image overlapping the top center */}
        <div className="absolute -top-[105px] left-1/2 transform -translate-x-1/2 z-20 hidden md:block sm:block ">
        <img
            src={centerLogo}
            alt="Center Logo"
            className="h-[200px] w-auto object-contain rounded-md"
        />
        </div>

      {/* Footer content */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center relative py-6">
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
          <span
            className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } mb-3 md:mb-0 text-center md:text-left`}
          >
            © {currentYear}{' '}
            <a href="" className="hover:underline">
              EreyomiF
            </a>. Made with 💜 .
          </span>
          <ul
            className={`flex flex-wrap justify-center md:justify-end items-center text-sm font-medium ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            <li>
              <a href="/home" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/devs_nerds_exploration?igsh=aDF0d2x6bnR4YThu&utm_source=qr"
                className="hover:underline me-4 md:me-6"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/funmilola-ereyomi-a88026268/"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/EreyomiF" className="hover:underline">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
