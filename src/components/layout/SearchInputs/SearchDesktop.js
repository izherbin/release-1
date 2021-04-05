import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Search } from 'components/UI/Search';
import { SelectRegion } from 'components/UI/SelectRegion';
import { Filter } from 'components/UI/Filter';
import { useMedia } from 'hooks/useMedia';

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
  filter: {
    zIndex: '100',
    marginRight: '30px',
  },
}));

export const SearchDesktop = ({ regions, regionHandler, searchHandler }) => {
  const { container, search, filter } = useStyles();
  const { matchesTablet } = useMedia();

  return (
    <Fragment>
      <div className={container}>
        <div className={search}>
          <Search searchHandler={searchHandler} />
        </div>
        <div style={{ marginRight: '30px' }}>
          {!matchesTablet && <SelectRegion regions={regions} regionHandler={regionHandler} />}
        </div>
        <div className={filter}>
          <Filter regionHandler={regionHandler} regions={regions} />
        </div>
        <Button disableRipple>Найти</Button>
      </div>
    </Fragment>
  );
};
