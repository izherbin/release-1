import { useState } from 'react';

export const useOrderToggle = () => {
  const [isOrdered, setOrdered] = useState(0);

  const orderHandler = () => {
    if (!isOrdered) return setOrdered(1);
    if (isOrdered === 1) return setOrdered(2);

    return setOrdered(1);
  };

  return { isOrdered, orderHandler };
};
