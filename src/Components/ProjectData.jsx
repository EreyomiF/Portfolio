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

{/*import React, { useState } from 'react';
import '../Timeline.css'; // Import the scoped CSS file

const TimelineItem = ({ date, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="timeline__item">
      <div className="timeline__item-header">
        <button
          className="timeline__arrow"
          type="button"
          aria-expanded={expanded}
          aria-controls={`item-${date}-ctrld`}
          onClick={handleClick}
        >
          <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
            <use href="#arrow" />
          </svg>
        </button>
        <span className="timeline__dot"></span>
        <span id={`item-${date}-name`} className="timeline__meta">
          <time className="timeline__date" dateTime={date}>{date}</time><br />
          <strong className="timeline__title">{title}</strong>
        </span>
      </div>
      <div
        className={`timeline__item-body ${expanded ? 'timeline__item-body--expanded' : ''}`}
        id={`item-${date}-ctrld`}
        role="region"
        aria-labelledby={`item-${date}-name`}
        aria-hidden={!expanded}
      >
        <div className="timeline__item-body-content">
          <p className="timeline__item-p">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="experience-root"> {/* Apply the scoped CSS class 
      <svg display="none">
        <symbol id="arrow">
          <polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </symbol>
      </svg>
      <h1>A Brief History of Unix Time</h1>
      <div id="timeline" className="timeline">
        <div className="btn-group">
          <button className="btn" type="button" data-action="expand">Expand All</button>
          <button className="btn" type="button" data-action="collapse">Collapse All</button>
        </div>
        <TimelineItem
          date="1970-01-01"
          title="Unix Epoch"
          description="This is the day the Unix clock began (or December 31, 1969 if you live behind UTC 😉)."
        />
        <TimelineItem
          date="1973-10-17"
          title="Digits Within ISO 8601 Format"
          description="At 6:36:57 PM UTC, the date in ISO 8601 format (1973-10-17) within the time digits (119731017) appeared for the first time."
        />
        <TimelineItem
          date="2001-09-09"
          title="1 Billion Seconds"
          description="Unix time reached 1,000,000,000 seconds at 1:46:40 AM UTC. The Danish UNIX User Group celebrated this in Copenhagen, Denmark."
        />
        <TimelineItem
          date="2009-02-13"
          title="1,234,567,890 Seconds"
          description="At 11:31:30 PM UTC, the digits of the time were 1234567890. This was celebrated worldwide, and even Google had a doodle for it."
        />
        <TimelineItem
          date="2033-05-18"
          title="2 Billion Seconds"
          description="Unix time will reach 2,000,000,000 seconds at 3:33:20 AM UTC."
        />
        <TimelineItem
          date="2038-01-19"
          title="Unix Epochalypse"
          description="Also known as the year 2038 problem, clocks running on a 32-bit signed integer will flip from 3:14:08 AM UTC on this day to 8:45:52 PM UTC on December 13, 1901. Therefore, values only from -2,147,483,648 to 2,147,483,647 for the second are supported."
        />
      </div>
    </div>
  );
};

export default Experience; */}

