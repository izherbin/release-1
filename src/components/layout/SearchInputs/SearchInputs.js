import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { SearchMobile } from 'components/layout/SearchInputs/SearchMobile';
import { SearchDesktop } from 'components/layout/SearchInputs/SearchDesktop';
import { useMedia } from 'hooks/useMedia';

export const SearchInputs = ({ isToggle, toggleHandler }) => {
  const { matchesMobile } = useMedia();

  return (
    <Fragment>
      <Typography variant="h2" component="h2" style={{ marginBottom: '16px' }}>
        База ниш
      </Typography>
      {matchesMobile && <SearchMobile />}
      {!matchesMobile && <SearchDesktop toggleHandler={toggleHandler} isToggle={isToggle} />}
    </Fragment>
  );
};
