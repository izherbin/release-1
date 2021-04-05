import { useState } from 'react';

export const useOrderToggle = ({ setSortHandler, setOrderHandler }) => {
  const [isOrdered, setOrdered] = useState(false);
  const [isUp, setUp] = useState(true);

  const orderHandler = (e) => {
    const { id } = e.currentTarget;

    setSortHandler(id);
    setOrdered(id);

    if (!isUp) return [setUp(true), setOrderHandler('-1')];

    return [setUp(false), setOrderHandler('+1')];
  };

  return { isOrdered, orderHandler, isUp };
};
