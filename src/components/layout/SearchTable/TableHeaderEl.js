import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UpDown } from 'components/UI/UpDown';
import { CustomTooltip } from 'components/UI/CustomTooltip';

const useStyles = makeStyles(({ palette: { primary, blueLight }, breakpoints }) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    userSelect: 'none',
    borderRight: `1px solid ${primary.main}`,
    width: ({ sizes, index }) => `${sizes[index]}px`,
  },
  text: {
    marginRight: '2px',
    fontSize: '0.8rem',
    lineHeight: '1',
    transform: 'translate(0, 1px)',
    color: blueLight,
  },
  right: {
    display: 'flex',
    transform: 'translateX(8px)',
    cursor: 'pointer',
    zIndex: '0',
  },
  info: {
    transform: 'translateX(-8px)',
  },
}));

export const TableHeaderEl = ({ name, sizes = [], index, isOrdered, orderHandler, isUp }) => {
  const { container, text, right, info } = useStyles({ sizes, index });

  return (
    <div className={container}>
      <span className={text}>{name}</span>
      {index !== 0 && (
        <div className={right}>
          {index !== 0 && (
            <CustomTooltip title="Я твой тултип">
              <img src="icons/info.svg" alt="" className={info} />
            </CustomTooltip>
          )}
          <UpDown index={index} isOrdered={isOrdered} orderHandler={orderHandler} isUp={isUp} />
        </div>
      )}
    </div>
  );
};
