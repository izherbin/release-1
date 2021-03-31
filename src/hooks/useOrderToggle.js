import { useState } from 'react';
import { useFetchData } from 'hooks/useFetchData';

export const useOrderToggle = () => {
  const [isOrdered, setOrdered] = useState(false);
  const [isUp, setUp] = useState(true);
  const { setOrder } = useFetchData();

  const orderHandler = (e) => {
    const { id } = e.currentTarget;

    setOrder(id);
    setOrdered(id);

    if (!isUp) return setUp(true);

    return setUp(false);
  };

  return { isOrdered, orderHandler, isUp };
};
