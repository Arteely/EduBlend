import React from 'react';

const ScrollingText = ({ text }) => {
  return (
    <div className="overflow-hidden">
      <h5 className="scroll-text whitespace-nowrap text-base font-bold tracking-tight text-dark-purple">
        {text}
      </h5>
    </div>
  );
};

export default ScrollingText;
