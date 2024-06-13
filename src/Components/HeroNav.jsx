import React, { useState } from 'react';

const Navbar = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={` ${isDarkMode ? 'bg-black' : 'bg-white'} border-t border-b border-purple-700 border-opacity-65 shadow-xl xl:pr-10`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://www.metalsignscanada.com/cdn/shop/products/gloss-black-coffee.png?v=1624547459&width=800" className="h-8 rounded-full" alt="Cup of Purity " />
          <span className={`self-center text-sm font-semibold whitespace-nowrap text-purple-700`}>WELCOME!</span>
        </a>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg text-sm md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 `}>
            <li>
              <a href="#" className={`block py-2 px-3 ${isDarkMode ? 'text-white hover:text-purple-700  md:text-white md:hover:text-purple-700' : 'text-gray-900 hover:text-purple-700 hover:bg-gray-100 md:hover:bg-transparent'} rounded md:bg-transparent md:p-0`} aria-current="page">HOME</a>
            </li>
            <li>
              <a href="#" className={`block py-2 px-3 ${isDarkMode ? 'text-white hover:text-purple-700  md:text-white md:hover:text-purple-700' : 'text-gray-900 hover:text-purple-700 hover:bg-gray-100 md:hover:bg-transparent'} rounded md:bg-transparent md:p-0`}>ABOUT</a>
            </li>
            <li>
              <a href="#" className={`block py-2 px-3 ${isDarkMode ? 'text-white hover:text-purple-700 md:text-white md:hover:text-purple-700' : 'text-gray-900 hover:text-purple-700 hover:bg-gray-100 md:hover:bg-transparent'} rounded md:bg-transparent md:p-0`}>PROJECTS</a>
            </li>
            <li>
              <a href="#" className={`block py-2 px-3 ${isDarkMode ? 'text-white hover:text-purple-700  md:text-white md:hover:text-purple-700' : 'text-gray-900 hover:text-purple-700 hover:bg-gray-100 md:hover:bg-transparent'} rounded md:bg-transparent md:p-0`}>CONTACT ME</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
