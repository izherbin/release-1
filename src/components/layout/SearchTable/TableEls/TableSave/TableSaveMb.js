import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { blue } }) => ({
  container: {
    display: 'flex',
    transform: 'translate(1px, -6px)',
    fontSize: '1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    border: `1px solid ${blue}`,
  },
  button: {
    padding: '4px 7px',
  },
  left: {
    borderRight: `1px solid ${blue}`,
    '&:hover': {
      transition: '0.3s',
      backgroundColor: '#2D80FF',
    },
  },
  right: {
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
