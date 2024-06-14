import React, { useEffect } from 'react';
import ContactImage from './ContactMe';
import IconsRow from './HomeSvg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const ContactForm = ({ isDarkMode }) => {
  useEffect(() => {
    AOS.init({ 
      duration: 4000,
      once: false,
      offset: 200,
    }); // Initialize AOS with a default duration
  }, []);

  return (
    <div className={`flex flex-col items-center h-auto`} style={{ backgroundColor: isDarkMode ? 'black' : '#F5F5F5', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <ContactImage isDarkMode={isDarkMode} />
      <div className="mb-8 text-center">
        <h1 className="text-3xl lg:text-4xl underline hello mb-4 mt-6 text-center text-purple-700">Contact Me</h1>
        <p className="text-gray-700 dark:text-gray-300 text-center">I usually work on several projects but I'll be happy to discuss new opportunities. Let's get in touch!</p>
      </div>
      <div className="w-full max-w-md mx-8" data-aos="fade-down"> {/* Apply the fade-down animation */}
        <div className="flex flex-col items-center">
          <form className={`grid grid-cols-2 gap-12 w-full shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 backdrop-blur-sm ${isDarkMode ? 'bg-gray-800 bg-opacity-30' : 'bg-gray-300 bg-opacity-30'}`} data-aos="fade-down"> {/* Apply the fade-down animation and add bg styling */}
            <div className="col-span-1">
              <div className="mb-6 border-b border-gray-700">
                <label className={`block text-${isDarkMode ? 'white' : 'gray-700'} text-sm font-bold mb-2`} htmlFor="name">
                  Name
                </label>
                <input
                  className={`shadow appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
                  id="name" type="text" placeholder="Name"
                />
              </div>
              <div className="mb-6 border-b border-gray-700">
                <label className={`block text-${isDarkMode ? 'white' : 'gray-700'} text-sm font-bold mb-2`} htmlFor="email">
                  Email
                </label>
                <input
                  className={`shadow appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
                  id="email" type="email" placeholder="Email"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="mb-6 border-b border-gray-700">
                <label className={`block text-${isDarkMode ? 'white' : 'gray-700'} text-sm font-bold mb-2`} htmlFor="phone">
                  Phone
                </label>
                <input
                  className={`shadow appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
                  id="phone" type="tel" placeholder="Phone"
                />
              </div>
              <div className="mb-6 custom-margin">
                <label className={`block text-${isDarkMode ? 'white' : 'gray-700'} text-sm font-bold mb-2`} htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message" placeholder="Message" rows="4"
                ></textarea>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-between -mt-12"> {/* Use justify-between to align items */}
              <button
                className={`border ${isDarkMode ? 'border-purple-700' : 'border-purple-700'} hover:bg-black hover:border-transparent text-${isDarkMode ? 'gray' : 'black'} hover:text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
                type="button"
              >
                Send
              </button>
              <IconsRow className="" /> {/* Move IconsRow component here */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
