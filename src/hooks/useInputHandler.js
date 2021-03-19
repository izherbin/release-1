import { useState } from 'react';

export const useInputHandler = () => {
  const [isInputs, setInputs] = useState({});

  const inputHandler = (type) => (e) => {
    setInputs({
      ...isInputs,
      [type]: e.target.value,
    });
  };

  return { isInputs, inputHandler };
};
