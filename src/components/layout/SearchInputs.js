import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Search } from 'components/UI/Search';
import { SelectRegion } from 'components/UI/SelectRegion';
import { Filter } from 'components/UI/Filter';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export const SearchInputs = ({}) => {
  const { container } = useStyles();

  return (
    <Fragment>
      <Typography variant="h2" component="h2" style={{ marginBottom: '16px' }}>
        База ниш
      </Typography>
      <div className={container}>
        <div style={{ marginRight: '31px', flex: '2' }}>
          <Search />
        </div>
        <div style={{ marginRight: '30px' }}>
          <SelectRegion />
        </div>
        <div style={{ marginRight: '38px' }}>
          <Filter />
        </div>
        <Button disableRipple>Найти</Button>
      </div>
    </Fragment>
  );
};
