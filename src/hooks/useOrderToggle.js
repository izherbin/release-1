import { useState } from 'react';

export const useOrderToggle = () => {
  const [isOrdered, setOrdered] = useState(false);
  const [isUp, setUp] = useState(true);

  const orderHandler = (e) => {
    const { id } = e.currentTarget;

    if (!isUp) return [setUp(true), setOrdered(id)];

    return [setUp(false), setOrdered(id)];
  };

  return { isOrdered, orderHandler, isUp };
};
