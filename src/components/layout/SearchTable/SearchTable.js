import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableHeader } from 'components/layout/SearchTable/TableHeader';
import { TableEls } from 'components/layout/SearchTable/TableEls/TableEls';
import { useMedia } from 'hooks/useMedia';
import { LoadingContainer } from 'components/UI/LoadingContainer';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    position: 'relative',
    borderRadius: '4px',
    marginBottom: '30px',
    minHeight: '124px',
  },
}));

export const SearchTable = ({ items = [], isPage, isLoading, ...rest }) => {
  const { container } = useStyles();
  const { matchesTablet } = useMedia();
  const [data] = items;

  const sizes = [51, 164, 122, 123, 122, 122, 123, 123];
  const sizesIpadHeader = [50, 163, 121, 60, 61, 60, 60, 122];
  const sizesIpad2 = [51, 164, 122, 61, 62, 61, 61, 123];

  /* table content when tablet goes 1px to the left, bug? */
  const allSizesHeader = matchesTablet ? sizesIpadHeader : sizes;
  const allSizesTable = matchesTablet ? sizesIpad2 : sizes;

  return (
    <div className={container}>
      <TableHeader sizes={allSizesHeader} {...rest} />
      <LoadingContainer loading={isLoading} />
      <TableEls sizes={allSizesTable} data={data} isPage={isPage} />
    </div>
  );
};
