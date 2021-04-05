import React from 'react';
import { Transition } from 'react-transition-group';

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const Fade = ({ in: inProp, children, dur = 100 }) => {
  const defaultStyle = {
    transition: `opacity ${dur}ms ease-in-out`,
    opacity: 0,
  };

  return (
    <Transition in={inProp} timeout={dur}>
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
