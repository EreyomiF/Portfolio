import React from 'react';
import TypingText from './TypingText';

const TextType = () => {
  const texts = ['"Technical Recruiter"', '"Talent Acquisition Specialist"', '"Tech Hiring"'];

  return (
    <div>
      <TypingText texts={texts} typingSpeed={50} pauseDuration={500} />
    </div>
  );
};

export default TextType;
