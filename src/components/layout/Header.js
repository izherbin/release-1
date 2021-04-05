import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from 'components/UI/Logo';
import { useOpenModal } from 'hooks/useOpenModal';
import { ModalContainer } from 'components/UI/Modal/ModalContainer';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '77px',
  },
  register: {
    cursor: 'pointer',
  },
}));

export const Header = ({}) => {
  const { container, register } = useStyles();
  const { isOpened, modalHandler, handleClose } = useOpenModal();
  const id = 'Register';

  return (
    <div className={container}>
      <Logo />
      <div className={register} id={id} onClick={modalHandler}>
        Register
      </div>
      <ModalContainer handleClose={handleClose} isOpened={isOpened} id={id}>
        111
      </ModalContainer>
    </div>
  );
};
