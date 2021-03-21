import { useState } from 'react';

export const useHidePholder = (text) => {
  const [isClicked, setClicked] = useState(text);

  const clickHandler = () => {
    if (isClicked === text) setClicked('');
    if (isClicked === '') setClicked(text);
  };
  return { isClicked, clickHandler };
};
