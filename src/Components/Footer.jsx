import React from 'react';

const Footer = ({ isDarkMode }) => {
    return (
        <footer className={`text-center ${isDarkMode ? 'bg-black' : 'bg-white'} border-t border-b border-purple-700 border-opacity-65 shadow-xl xl:pr-10`}>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} sm:text-center block mb-3`}>
                    © 2023 - 2024 <a href="" className="hover:underline">EreyomiF</a>. Made with 💜 .
                </span>
                <ul className={`flex flex-wrap justify-center items-center mt-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} sm:mt-0`}>
                    <li>
                        <a href="/home" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/devs_nerds_exploration?igsh=aDF0d2x6bnR4YThu&utm_source=qr" className="hover:underline me-4 md:me-6">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/funmilola-ereyomi-a88026268/" className="hover:underline me-4 md:me-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/EreyomiF" className="hover:underline">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
