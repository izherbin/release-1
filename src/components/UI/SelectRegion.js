import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DropDown } from 'components/UI/DropDown/DropDown';
import { Fade } from 'utils/transitions';
import { ToggleContext } from 'components/state/context/toggle-context';
import { useRegionSelect } from 'hooks/useRegionSelect';

const useStyles = makeStyles(({ palette: { secondary, blueLight }, breakpoints }) => ({
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
    // [breakpoints.down('md')]: {
    //   left: '260px',
    //   zIndex: '10',
    // },
    // [breakpoints.down('sm')]: {
    //   left: '-160px',
    //   zIndex: '10',
    // },
  },
}));

export const SelectRegion = ({ regionHandler, regions }) => {
  const {
    toggleState: { toggled },
    dispatch,
  } = useContext(ToggleContext);
  const { container, icon, dropDown } = useStyles(toggled);
  const toggleHandler = () => dispatch({});
  const { isSelected, selectHandler } = useRegionSelect(regions, regionHandler);

  return (
    <div className={container} onClick={toggleHandler}>
      <div>{isSelected}</div>
      <div className={icon}>
        <img src="icons/down.svg" style={{ transform: 'rotate(-90deg)' }} />
      </div>
      <Fade in={toggled}>
        <div className={dropDown}>
          {toggled && <DropDown regions={regions} selectHandler={selectHandler} />}
        </div>
      </Fade>
    </div>
  );
};
