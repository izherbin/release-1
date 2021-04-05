import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ToggleContext } from 'components/state/context/toggle-context';
import { DropRegion } from 'components/UI/DropDown/DropRegion';

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
    color: secondary.main,
    border: `1px solid ${blueLight}`,
  },
}));

export const SelectRegion = ({ regionHandler, regions }) => {
  const {
    toggleState: { toggledMenu },
    menuHandler,
  } = useContext(ToggleContext);
  const { container } = useStyles(toggledMenu);

  return (
    <div className={container} onClick={menuHandler} id="Регион">
      <DropRegion regionHandler={regionHandler} regions={regions} toggledMenu={toggledMenu} />
    </div>
  );
};
