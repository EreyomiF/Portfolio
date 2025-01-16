import React, { useState, useEffect } from 'react';
import '../Timeline.css'; // Import the scoped CSS file
import WorkArrow from './WorkArrow';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const TimelineItem = ({ date, title, subtitle, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  // Define bullet points array
  const bulletPoints = description.split('\n');

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
          <time className="timeline__date" dateTime={date}>{date}</time>
          <div>
            <strong className="timeline__title">{title}</strong> <br />
            {subtitle && <span className="timeline__subtitle">{subtitle}</span>}
          </div>
        </span>
      </div>
      <div
        className={`timeline__item-body ${expanded ? 'timeline__item-body--expanded' : ''}`}
        id={`item-${date}-ctrld`}
        role="region"
        aria-labelledby={`item-${date}-name`}
        aria-hidden={!expanded}
      >
        <div className="timeline__item-body-content  ">
          {/* Render bullet points as a list */}
          <ul className="custom-list">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
      offset: 200, // Offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div className="experience-root mt-[-100px]" data-aos="fade-up"> {/* Apply the scoped CSS class */}
      <svg display="none">
        <symbol id="arrow">
          <polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </symbol>
      </svg>
      <div className="flex justify-center ">
        <WorkArrow className="" />
      </div>
      <h1 className='hello text-purple-700 underline'> Work Experience</h1>
      <div id="timeline" className="timeline">
        <div className="btn-group">
          <button className="btn" type="button" data-action="expand">Expand All</button>
          <button className="btn" type="button" data-action="collapse">Collapse All</button>
        </div>
        <TimelineItem
          date="2022-Present"
          title="Think Eloquently"
          subtitle="Front-end developer"
          description={``}
        />
         <TimelineItem
          date="2023-Present"
          title="Trocah Technology Limited"
          subtitle="Front-end developer"
          description={``}
        />


        <TimelineItem
          date="August 2023"
          title="INTERNCHOICE"
          subtitle="Web developer"
          description={``}
        />

        <TimelineItem
          date="2023-Present"
          title="Cup of Purity"
          subtitle="Free-lance web-developer"
          description={``}
        />

      </div>
    </div>
  );
};

export default Experience;
