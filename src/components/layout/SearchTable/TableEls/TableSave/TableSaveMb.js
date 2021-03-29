import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { blue } }) => ({
  container: {
    display: 'flex',
    height: '22px',
    maxWidth: '127px',
    transform: 'translate(1px, -6px)',
    fontSize: '1rem',
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: `1px solid ${blue}`,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '20px',
  },
  left: {
    borderRight: `1px solid ${blue}`,
    borderRadius: '3px 0 0 3px',
    '&:hover': {
      transition: '0.3s',
      backgroundColor: '#2D80FF',
    },
  },
  right: {
    borderRadius: '0 3px 3px 0',
    '&:hover': {
      transition: '0.3s',
      backgroundColor: '#2D80FF',
    },
  },
}));

export const TableSaveMb = ({}) => {
  const { container, button, left, right } = useStyles();

  return (
    <div className={container}>
      <div className={`${button} ${left}`}>Сохранить</div>
      <div className={`${button} ${right}`}>Отправить</div>
    </div>
  );
};
