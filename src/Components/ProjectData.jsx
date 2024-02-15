// MyComponent.js
import React from 'react';
import Projects from '../Projects';

const ProjectData = () => {
  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {Projects.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Gender: {user.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectData;
