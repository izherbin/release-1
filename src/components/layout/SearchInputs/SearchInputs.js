import React, { Fragment } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import { SearchMobile } from 'components/layout/SearchInputs/SearchMobile';
import { SearchDesktop } from 'components/layout/SearchInputs/SearchDesktop';

export const SearchInputs = ({ isToggle, toggleHandler }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Fragment>
      <Typography variant="h2" component="h2" style={{ marginBottom: '16px' }}>
        База ниш
      </Typography>
      {matches && <SearchMobile />}
      {!matches && <SearchDesktop toggleHandler={toggleHandler} isToggle={isToggle} />}
    </Fragment>
  );
};
