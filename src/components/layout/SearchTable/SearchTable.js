import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableHeader } from 'components/layout/SearchTable/TableHeader';
import { TableEls } from 'components/layout/SearchTable/TableEls/TableEls';
import { useMedia } from 'hooks/useMedia';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    borderRadius: '4px',
    marginBottom: '30px',
  },
}));

export const SearchTable = () => {
  const { container } = useStyles();
  const { matchesTablet } = useMedia();

  const sizes = [51, 164, 122, 123, 122, 122, 123, 123];
  const sizesIpadHeader = [50, 163, 121, 60, 61, 60, 60, 122];
  const sizesIpad2 = [51, 164, 122, 61, 62, 61, 61, 123];

  /* table content when tablet goes 1px to the left, bug? */
  const allSizesHeader = matchesTablet ? sizesIpadHeader : sizes;
  const allSizesTable = matchesTablet ? sizesIpad2 : sizes;

  return (
    <div className={container}>
      <TableHeader sizes={allSizesHeader} />
      <TableEls sizes={allSizesTable} />
    </div>
  );
};
