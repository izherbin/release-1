import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ToggleContext } from 'components/state/context/toggle-context';
import { useMedia } from 'hooks/useMedia';
import { FilterIcon } from 'components/UI/Icons/FilterIcon';
import { DropRegion } from 'components/UI/DropDown/DropRegion';

const useStyles = makeStyles(({ palette: { primary, blueLight, secondary }, breakpoints }) => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    cursor: 'pointer',
    userSelect: 'none',
    border: `1px solid ${blueLight}`,
    backgroundColor: primary.main,
    transform: 'translateX(-3px)',
    '&:hover': {
      transition: '0.3s',
      backgroundColor: '#2D80FF',
      border: `1px solid transparent`,
    },
    '&:hover > *': {
      transition: '0.3s',
      fill: secondary.main,
    },
    [breakpoints.down('sm')]: {
      borderRadius: '0 4px 4px 0',
    },
  },
}));

export const Filter = ({ regionHandler, regions }) => {
  const { container } = useStyles();
  const {
    toggleState: { toggledMenu },
    menuHandler,
  } = useContext(ToggleContext);
  const { matchesMobile, matchesTablet, matchBoth } = useMedia();
  const checkIf = (e) => {
    if (!matchBoth) return;

    menuHandler(e);
  };

  return (
    <div className={container} onClick={checkIf} id="Фильтр">
      <FilterIcon menuHandler={menuHandler} />
      {matchBoth && (
        <DropRegion
          regionHandler={regionHandler}
          regions={regions}
          toggledMenu={toggledMenu}
          matchesMobile={matchesMobile}
          matchesTablet={matchesTablet}
        />
      )}
    </div>
  );
};
