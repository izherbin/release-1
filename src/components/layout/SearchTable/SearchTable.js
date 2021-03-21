import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableHeader } from 'components/layout/SearchTable/TableHeader';
import { TableEls } from 'components/layout/SearchTable/TableEls/TableEls';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    borderRadius: '4px',
    backgroundColor: primary.dim,
    marginBottom: '30px',
  },
}));

export const SearchTable = ({}) => {
  const { container } = useStyles();
  const sizes = [51, 164, 122, 123, 122, 122, 123, 123];

  return (
    <div className={container}>
      <TableHeader sizes={sizes} />
      <TableEls sizes={sizes} />
    </div>
  );
};
