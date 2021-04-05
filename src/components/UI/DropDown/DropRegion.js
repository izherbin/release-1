import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'utils/transitions';
import { DropDown } from 'components/UI/DropDown/DropDown';
import { useRegionSelect } from 'hooks/useRegionSelect';

const useStyles = makeStyles(({ breakpoints }) => ({
  icon: {
    right: '14px',
    zIndex: '100',
    transform: (toggledMenu) => (toggledMenu ? 'rotate(90deg)' : 'rotate(0deg)'),
  },
  dropDown: {
    position: 'absolute',
    left: '-1px',
    top: '53px',
    zIndex: '100',
    [breakpoints.down('md')]: {
      left: '-90px',
    },
    [breakpoints.down('sm')]: {
      top: '44px',
      left: '-176px',
    },
  },
}));

export const DropRegion = ({
  regions,
  toggledMenu,
  regionHandler,
  matchesMobile,
  matchesTablet,
}) => {
  const { icon, dropDown } = useStyles();
  const { isSelected, selectHandler } = useRegionSelect(regions, regionHandler);
  const check = matchesMobile || matchesTablet;

  return (
    <Fragment>
      {!check && (
        <Fragment>
          <div id="Регион">{isSelected}</div>
          <div className={icon}>
            <img src="icons/down.svg" style={{ transform: 'rotate(-90deg)' }} />
          </div>
        </Fragment>
      )}
      {/* // <Fade in={toggledMenu}> */}
      <div className={dropDown}>
        {toggledMenu && <DropDown regions={regions} selectHandler={selectHandler} />}
      </div>
      {/* // </Fade> */}
    </Fragment>
  );
};
