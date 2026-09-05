import React, { useState, useEffect } from 'react';
import '../Timeline.css'; // Import the scoped CSS file
import WorkArrow from './WorkArrow';
import talenqoraLogo from '../Assets/talenqora-mark-round.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const TimelineItem = ({ date, title, subtitle, description, logo }) => {
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
            <span className="inline-flex items-center gap-2">
              {logo && <img src={logo} alt="" className="h-7 w-7 rounded-full object-cover" />}
              <strong className="timeline__title">{title}</strong>
            </span> <br />
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

const Experience = ({ isDarkMode }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      offset: 200,
    });
  }, []);

  return (
    <div className={`experience-root ${isDarkMode ? 'exp-dark' : 'exp-light'} mt-[-100px]`} data-aos="fade-up">
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
          date="Sep 2023 - Present"
          title="Trocah Technology Limited"
          subtitle="Technical Talent Acquisition Specialist - London, UK (Remote)"
          description={"Own end-to-end technical hiring across software engineering, DevOps, QA and leadership profiles in a fast-paced fintech, closing 15+ roles from intake briefing through offer negotiation and onboarding.\nPartner directly with engineering leads on role requirements, headcount priorities and competency-based interview frameworks, improving shortlist quality and reducing mis-hires.\nRun multi-channel and executive sourcing - Boolean, X-Ray, LinkedIn Recruiter and targeted cold outreach - to engage CTOs, Scrum Masters, Senior Project Managers and Engineering Managers who are not actively job-hunting.\nApply hands-on React and TypeScript experience to evaluate technical fit and code quality directly, removing engineering teams from early-stage screening and reducing time-to-hire.\nOwn recruitment operations end to end: ATS hygiene (Greenhouse, Lever), pipeline reporting and interview coordination.\nBuilt and shipped a Kanban-based candidate tracking tool in React, TypeScript and Tailwind CSS to manage pipeline visibility across concurrent searches."}
        />
        <TimelineItem
          date="Nov 2025 - Present"
          title="Talenqora"
          subtitle="Founder - Nigeria (Remote, Part-time)"
          logo={talenqoraLogo}
          description={"Founded and run an early-stage recruiting startup connecting African talent with global remote job opportunities, sourcing candidates and posting relevant openings.\nCreate and publish career content, CV tips, job openings and recruiting insights across LinkedIn, Twitter/X, Instagram and TikTok to grow engagement and support candidate sourcing."}
        />
        <TimelineItem
          date="Jan 2025 - Present"
          title="Forgutti, Unipessoal LDA"
          subtitle="Technical Recruiter, AI and Frontend Engineering - Lisboa, Portugal (Part-time)"
          description={"Recruit for an AI systems company building production AI: RAG pipelines and Claude API integrations on a TypeScript-first stack of React, Next.js, Angular, NestJS, Node.js, PostgreSQL and Supabase with pgvector.\nSourced, interviewed and placed the React and TypeScript developers who built VistoPilot, an AI relocation platform giving source-cited visa guidance across 197 origin countries, now live in production.\nSource through Boolean searches built around stack keywords, adjacent job titles and previous employers, reaching passive candidates who never respond to job adverts.\nWrite personalised outreach referencing each candidate actual stack and projects, which consistently outperforms templated InMails on reply rate.\nInterview end to end, from first screening call through structured technical-fit interviews assessing component architecture, type safety, state management and testing habits.\nCalibrate briefs with engineering managers on what separates junior, mid and senior React work, keeping salary expectations realistic."}
        />
        <TimelineItem
          date="May 2024 - Aug 2024"
          title="Bincom Dev Center"
          subtitle="Mobile Application Development, Upskilling Course - Lagos, Nigeria (Remote)"
          description={"Completed a four-month part-time mobile application development course, building cross-platform applications with Cordova and Android Studio and practising Agile workflows through project-based coursework.\nBuilt first-hand understanding of mobile software team structures and the skills that distinguish high-performing candidates, directly informing technical screening for mobile roles."}
        />
        <TimelineItem
          date="Jun 2022 - Jun 2023"
          title="Trocah Technology Limited"
          subtitle="React Developer - London, UK (Remote)"
          description={"Built and optimised responsive interfaces for financial dashboards and data-driven applications using React.js and Tailwind CSS.\nDeveloped reusable React components with clean, modular architecture and integrated REST APIs for dynamic data synchronisation across the platform.\nImproved application performance through lazy loading, code-splitting and caching."}
        />
        <TimelineItem
          date="Feb 2021 - Feb 2022"
          title="Think Eloquently"
          subtitle="Front End Developer - Lagos, Nigeria (Hybrid)"
          description={"Designed and delivered production web interfaces using HTML, CSS, Bootstrap and JavaScript across multiple Agile projects.\nAchieved a 70% improvement in software stability through systematic debugging and performance optimisation, and implemented accessible UI improvements that boosted end-user engagement by 15%.\nParticipated in peer technical reviews and supported onboarding of junior developers, developing the evaluation skills that shaped the move into technical recruitment.\nDeveloped responsive web and hybrid mobile experiences with HTML5, CSS, Bootstrap, JavaScript and Cordova, improving cross-device compatibility by 30% and reducing page load times by 20%."}
        />
        <TimelineItem
          date="Aug 2020 - Dec 2020"
          title="Intern Choice"
          subtitle="Frontend Developer Intern - India (Remote)"
          description={"Refactored and migrated a legacy codebase to a maintainable architecture, improving application performance by 40%.\nBuilt an interactive JavaScript quiz application handling dynamic question rendering, scoring logic and user interaction, plus a responsive landing page focused on clean UI and cross-browser compatibility.\nWorked within a structured remote engineering team, laying the foundation for a frontend career before the transition into technical recruitment."}
        />
      </div>
    </div>
  );
};

export default Experience;