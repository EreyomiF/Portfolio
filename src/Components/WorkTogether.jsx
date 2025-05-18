import React from 'react';
import Image from '../Assets/WorkTogether.png'; // Adjust path as needed

function WorkTogether() {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="w-full h-full">
        <img
          src={Image}
          alt="Sample"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default WorkTogether;
