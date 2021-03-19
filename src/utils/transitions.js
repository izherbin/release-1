import React from 'react';
import { Transition } from 'react-transition-group';

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const Fade = ({ in: inProp, children, dur }) => {
  const duration = dur || 500;

  const defaultStyle = {
    // display: 'flex',
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};
