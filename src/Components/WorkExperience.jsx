import React, { useState } from 'react';
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
        <div className="timeline__item-body-content">
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
  return (
    <div className="experience-root mt-[-100px]"> {/* Apply the scoped CSS class */}
      <svg display="none">
        <symbol id="arrow">
          <polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </symbol>
      </svg>
      <div class="flex justify-center ">
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
          description={`Successfully launched Thineloquently's Orile office, achieving a remarkable tripling of revenue within the initial nine months, representing 20% of the company's total revenue.\nOrchestrated a transformative redesign of Thineloquently's mobile app and website, recognized for outstanding performance, and earned a promotion within 15 months, one year ahead of the scheduled timeline.\nProudly representing Thineloquently as a dynamic Tech Marketer and Front-End Developer from the vibrant hub of Orile, Lagos, Nigeria.\nPioneered the adoption of responsive web design and development principles, achieving a notable 70% improvement in software stability. Executed end-to-end development of responsive, user-friendly websites and applications, driving a substantial 15% boost in user engagement.\nFostered seamless collaboration within high-paced distribution teams, cultivating a culture of constructive feedback, dedication, and universality, resulting in an impressive 10% improvement in team efficiency. Proactively optimized and refined existing software applications, addressing errors and enhancing performance, culminating in a commendable 20% increase in overall efficiency and user satisfaction.\nProduced insightful reports detailing programming and project specifications, activities, and status updates, contributing to informed decision-making processes.`}
        />
        
        <TimelineItem
        date="August 2023"
        title="INTERNCHOICE"
        subtitle="Web developer"
        description={`Commenced my journey with internChoice in 2023 as a Web Developer Intern, pioneering the development team as the inaugural member of the analytics team. Played a pivotal role in shaping the startup's growth trajectory, strategically leveraging substantial Series A funding.\nEmbarked on a pivotal role as the inaugural member of the analytics team at internChoice, playing a vital role in shaping the startup's growth trajectory by leveraging substantial Series A funding from Intern Choice. Conducted thorough testing and evaluation of new programs, playing a key role in identifying and resolving issues that led to a significant improvement in overall performance.\nPrepared and delivered comprehensive reports on programming and project specifications, contributing crucial insights to data-driven decision-making processes.\nThrived in a dynamic learning environment, actively developing my skills through collaborative efforts with experienced peers and stakeholders.\n Demonstrated a commitment to continuous improvement by embracing constructive feedback, displaying dedication to tasks, and applying a universal approach to problem-solving. `}
        />

        <TimelineItem
          date="2023-Present"
          title="Cup of Purity"
          subtitle="Free-lance web-developer"
          description={`Applied strategic precision in coding to craft websites that consistently surpass client expectations, striking a meticulous balance between aesthetics and functionality\nSignificantly contributed to the financial prosperity of Cup of Purity by implementing strategic coding measures that delivered exceptional value to clients while adhering to budget constraints.`}
        />

      </div>
    </div>
  );
};

export default Experience;
