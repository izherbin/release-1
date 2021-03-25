import React, { Fragment } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Search } from 'components/UI/Search';
import { SelectRegion } from 'components/UI/SelectRegion';
import { Filter } from 'components/UI/Filter';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    marginRight: '31px',
    flex: '2',
    [breakpoints.down('md')]: {
      marginRight: '0',
    },
  },
}));

export const SearchDesktop = ({ isToggle, toggleHandler }) => {
  const { container, search } = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Fragment>
      <div className={container}>
        <div className={search}>
          <Search />
        </div>
        <div style={{ marginRight: '30px' }}>
          {!matches && <SelectRegion toggleHandler={toggleHandler} isToggle={isToggle} />}
        </div>
        <div style={{ marginRight: '38px' }}>
          <Filter />
        </div>
        <Button disableRipple>Найти</Button>
      </div>
    </Fragment>
  );
};
