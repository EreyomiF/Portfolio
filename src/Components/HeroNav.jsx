import React, { useState } from 'react';

const Navbar = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`border-gray-200 ${isDarkMode ? 'dark:bg-gray-900' : 'bg-white'} shadow-lg mt-0 border-purple-500`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isDarkMode ? 'dark:text-purple-500' : 'text-gray-900'}`}>Flowbite</span>
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
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${isDarkMode ? 'bg-gray-800 md:bg-gray-900 dark:border-gray-700' : 'bg-gray-50 md:bg-white'} md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}>
            <li>
              <a href="#" className={`block py-2 px-3 ${isDarkMode ? 'text-white bg-blue-700 md:text-blue-500' : 'text-gray-900'} rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500`} aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className={`block py-2 px-3 ${isDarkMode ? 'text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'} md:p-0`}>About</a>
            </li>
            <li>
              <a href="#" className={`block py-2 px-3 ${isDarkMode ? 'text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'} md:p-0`}>Services</a>
            </li>
            <li>
              <a href="#" className={`block py-2 px-3 ${isDarkMode ? 'text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'} md:p-0`}>Pricing</a>
            </li>
            <li>
              <a href="#" className={`block py-2 px-3 ${isDarkMode ? 'text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'} md:p-0`}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
