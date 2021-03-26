import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DropDown } from 'components/UI/DropDown/DropDown';
import { Fade } from 'utils/transitions';
import { ToggleContext } from 'components/state/context/toggle-context';

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
    top: '53px',
  },
}));

export const SelectRegion = ({ isData }) => {
  const {
    toggleState: { toggled },
    dispatch,
  } = useContext(ToggleContext);
  const { container, icon, dropDown } = useStyles(toggled);
  const toggleHandler = () => dispatch({});

  const [isSelected, setSelected] = useState('Регион запуска бизнеса');
  const selectHandler = (e) => {
    const content = e.target.id;

    return setSelected(content);
  };

  return (
    <div className={container} onClick={toggleHandler}>
      <div>{isSelected}</div>
      <div className={icon}>
        <img src="icons/down.svg" style={{ transform: 'rotate(-90deg)' }} />
      </div>
      <Fade in={toggled}>
        <div className={dropDown}>
          {toggled && <DropDown isData={isData} selectHandler={selectHandler} />}
        </div>
      </Fade>
    </div>
  );
};
