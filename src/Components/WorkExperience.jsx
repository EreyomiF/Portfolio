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
        <div className="timeline__item-body-content">
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
      duration: 2000,
      once: false,
      offset: 200,
    });
  }, []);

  return (
    <div className="experience-root mt-[-100px]" data-aos="fade-up">
      <svg display="none">
        <symbol id="arrow">
          <polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </symbol>
      </svg>
      <div className="flex justify-center">
        <WorkArrow className="" />
      </div>
      {/* Center the heading text on all screens, or use lg:text-center for large screens only */}
      <h1 className='hello text-purple-700 underline text-center py-4'>Work Experience</h1>

      {/*
        To center the timeline on large screens:
        1. Add lg:mx-auto to center it horizontally.
        2. Add a lg:max-w- (e.g., lg:max-w-4xl, lg:max-w-5xl, or lg:max-w-screen-lg)
           to give the timeline container a maximum width on large screens.
           mx-auto needs a constrained width to effectively center the element.
           Adjust the max-width value based on your design preference.
      */}
      <div id="timeline" className="timeline lg:mx-auto lg:max-w-4xl xl:max-w-5xl">
        {/* Center the button group within the timeline container */}
        <div className="btn-group text-center py-2"> {/* Added text-center and some padding */}
          <button className="btn" type="button" data-action="expand">Expand All</button>
          <button className="btn" type="button" data-action="collapse">Collapse All</button>
        </div>
        <TimelineItem
          date="2022-Present"
          title="Think Eloquently"
          subtitle="Front-end developer"
          description={""}
        />
         <TimelineItem
          date="2023-Present"
          title="Trocah Technology Limited"
          subtitle="Front-end developer"
          description={""}
        />
        <TimelineItem
          date="August 2023"
          title="INTERNCHOICE"
          subtitle="Web developer"
          description={""}
        />
        <TimelineItem
          date="2023-Present"
          title="Cup of Purity"
          subtitle="Free-lance web-developer"
          description={""}
        />
      </div>
    </div>
  );
};

export default Experience;