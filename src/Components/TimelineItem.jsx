import React, { useState, useEffect } from 'react';

const TimelineItem = ({ date, title, subtitle, description, expanded }) => {
  const bulletPoints = description.split('\n');

  return (
    <div className="timeline__item">
      <div className="timeline__item-header">
        <button className="timeline__arrow" type="button">
          <svg className={`timeline__arrow-icon ${expanded ? 'expanded' : ''}`} viewBox="0 0 24 24" width="24px" height="24px">
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
      <div className={`timeline__item-body ${expanded ? 'expanded' : ''}`}>
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

export default TimelineItem;
