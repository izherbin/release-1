import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UpDown } from 'components/UI/UpDown';
import { CustomTooltip } from 'components/UI/CustomTooltip';
import { ToggleContext } from 'components/state/context/toggle-context';

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
    transform: 'translate(0, 0px)',
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

export const TableHeaderEl = ({ name, sizes = [], index, isUp, orderHandler, isOrdered }) => {
  const { container, text, right, info } = useStyles({ sizes, index });
  const cliclHan = () => console.log(2);

  return (
    <div className={container}>
      <span className={text}>{name}</span>
      {index !== 0 && (
        <div className={right}>
          {index !== 0 && (
            <div onMouseEnter={cliclHan}>
              <CustomTooltip title="Я твой тултип">
                <img src="icons/info.svg" alt="" className={info} />
              </CustomTooltip>
            </div>
          )}
          <UpDown index={index} isOrdered={isOrdered} orderHandler={orderHandler} isUp={isUp} />
        </div>
      )}
    </div>
  );
};
