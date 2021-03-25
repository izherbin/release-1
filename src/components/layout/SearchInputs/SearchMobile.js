import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from 'components/UI/Search';
import { Filter } from 'components/UI/Filter';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    position: 'relative',
  },
  filter: {
    position: 'absolute',
    right: '0',
  },
}));

export const SearchMobile = ({}) => {
  const { container, filter } = useStyles();

  return (
    <div className={container}>
      <Search />
      <div className={filter}>
        <Filter />
      </div>
    </div>
  );
};
