import { useState } from 'react';

export const useOpenModal = () => {
  const [isOpened, setOpened] = useState(false);

  const modalHandler = (e) => {
    const { id } = e.target;

    setOpened(id);
  };

  const handleClose = () => setOpened(false);

  return { isOpened, modalHandler, handleClose };
};
