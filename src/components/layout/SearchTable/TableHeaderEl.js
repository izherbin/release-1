import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UpDown } from 'components/UI/UpDown';
import { CustomTooltip } from 'components/UI/CustomTooltip';
import { ToggleContext } from 'components/state/context/toggle-context';
import { DIMMED_BG } from 'components/state/constants';
import { useToggle } from 'hooks/useToggle';
import ClickAwayListener from 'react-click-away-listener';

const useStyles = makeStyles(({ palette: { primary, blueLight } }) => ({
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
    position: 'relative',
    zIndex: '1',
  },
  info: {
    transform: 'translateX(-8px)',
    zIndex: '1',
    cursor: 'pointer',
  },
}));

export const TableHeaderEl = ({ name, sizes = [], index, ...rest }) => {
  const { container, text, right, info } = useStyles({ sizes, index });
  const {
    dispatch,
    toggleState: { dimmed },
  } = useContext(ToggleContext);
  const { isToggle, toggleHandler, toggleOff } = useToggle();
  const dispatchHandler = () => [toggleHandler(), dispatch({ type: DIMMED_BG })];

  return (
    <div className={container}>
      <span className={text}>{name}</span>
      {index !== 0 && (
        <div className={right}>
          <ClickAwayListener onClickAway={toggleOff}>
            <div>
              <CustomTooltip title="Я твой тултип" id="Инфо" open={isToggle}>
                <img src="icons/info.svg" className={info} id="Инфо" onClick={dispatchHandler} />
              </CustomTooltip>
            </div>
          </ClickAwayListener>
          <UpDown index={index} dimmed={dimmed} {...rest} />
        </div>
      )}
    </div>
  );
};
