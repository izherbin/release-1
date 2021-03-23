import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UpDown } from 'components/UI/UpDown';

const useStyles = makeStyles(({ palette: { primary, blueLight } }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    userSelect: 'none',
    borderRight: `1px solid ${primary.main}`,
    width: ({ sizes, index }) => `${sizes[index]}px`,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginRight: '2px',
    fontSize: '0.8rem',
    lineHeight: '0',
    transform: 'translate(0, 1px)',
    color: blueLight,
  },
  right: {
    display: 'flex',
    transform: 'translateX(8px)',
    cursor: 'pointer',
    zIndex: '0',
  },
}));

export const TableHeaderEl = ({ name, sizes, index, isOrdered, orderHandler, isUp }) => {
  const { container, left, text, right } = useStyles({ sizes, index });

  return (
    <div className={container}>
      <div className={left}>
        <div className={text}>{name}</div>
        {index !== 0 && <img src="icons/info.svg" alt="" />}
      </div>
      {index !== 0 && (
        <div className={right}>
          <UpDown index={index} isOrdered={isOrdered} orderHandler={orderHandler} isUp={isUp} />
        </div>
      )}
    </div>
  );
};
