import React from 'react';
import ContactImage from './ContactMe';

const ContactForm = ({ isDarkMode }) => {
  return (
    <div className={`flex justify-center items-center h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-200'}`}>
      <div className="flex flex-col items-center w-full max-w-md"> {/* Flex container for vertical alignment */}
        <ContactImage isDarkMode={isDarkMode} /> {/* Render ContactImage component */}
        <form className="grid grid-cols-2 gap-4 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 backdrop-blur-sm bg-white/30 bg-opacity-30">
          {/* First column with two inputs */}
          <div className="col-span-1">
            <div className="mb-6">
              <label className={`block text-${isDarkMode ? 'white' : 'gray-700'} text-sm font-bold mb-2`} htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <label className={`block text-${isDarkMode ? 'white' : 'gray-700'} text-sm font-bold mb-2`} htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Email"
              />
            </div>
          </div>
          {/* Second column with two inputs stacked vertically */}
          <div className="col-span-1">
            <div className="mb-6">
              <label className={`block text-${isDarkMode ? 'white' : 'gray-700'} text-sm font-bold mb-2`} htmlFor="phone">
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" placeholder="Phone"
              />
            </div>
            <div className="mb-6">
              <label className={`block text-${isDarkMode ? 'white' : 'gray-700'} text-sm font-bold mb-2`} htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message" placeholder="Message" rows="4"
              ></textarea>
            </div>
          </div>
          {/* Button */}
          <div className="col-span-2">
            <button
              className={`bg-${isDarkMode ? 'blue-500' : 'blue-700'} hover:bg-${isDarkMode ? 'blue-700' : 'blue-900'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
              type="button"
              style={{marginLeft: '-20px'}} // Adjust left margin
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
