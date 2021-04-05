import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(({ shadow }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    boxShadow: shadow.primary,
    outline: 'none',
    borderRadius: '4px',
  },
}));

export const ModalContainer = ({ children, handleClose, isOpened, id }) => {
  const { container, paper } = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={container}
      open={isOpened === id}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpened}>
        <div className={paper}>{children}</div>
      </Fade>
    </Modal>
  );
};
