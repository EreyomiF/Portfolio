import React from 'react';
import TypingText from './TypingText';

const TextType = () => {
  const texts = ['"Hello, world!"', '"Welcome to my site."', '"Enjoy your stay!"'];

  return (
    <div>
      <TypingText texts={texts} typingSpeed={50} pauseDuration={500} />
    </div>
  );
};

export default TextType;
