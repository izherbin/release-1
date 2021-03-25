import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DropDown } from 'components/UI/DropDown/DropDown';
import { Fade } from 'utils/transitions';

const useStyles = makeStyles(({ palette: { secondary, blueLight } }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    width: '214px',
    maxHeight: '40px',
    padding: '12px 15px',
    cursor: 'pointer',
    borderRadius: '4px',
    userSelect: 'none',
    zIndex: '1',
    color: secondary.main,
    border: `1px solid ${blueLight}`,
  },
  icon: {
    position: 'absolute',
    right: '14px',
    transform: (isToggle) => (isToggle ? 'rotate(90deg)' : 'rotate(0deg)'),
  },
  dropDown: {
    position: 'absolute',
    left: '-1px',
    top: '39px',
  },
}));

export const SelectRegion = ({ isToggle, toggleHandler }) => {
  const { container, icon, dropDown } = useStyles(isToggle);

  return (
    <div className={container} onClick={toggleHandler}>
      <div>Регион запуска бизнеса</div>
      <div className={icon}>
        <img src="icons/down.svg" style={{ transform: 'rotate(-90deg)' }} />
      </div>
      <Fade in={isToggle}>
        <div className={dropDown}>{isToggle && <DropDown />}</div>
      </Fade>
    </div>
  );
};
