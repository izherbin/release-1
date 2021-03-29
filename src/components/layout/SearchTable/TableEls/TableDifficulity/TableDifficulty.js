import React, { Fragment } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { TableMobile } from 'components/layout/SearchTable/TableEls/TableDifficulity/TableMobile';
import { TableDesktop } from 'components/layout/SearchTable/TableEls/TableDifficulity/TableDesktop';

export const TableDifficulty = ({ data: { difficulty = '4.5' } }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only('md'));

  return (
    <Fragment>
      {matches && <TableMobile difficulty={difficulty} />}
      {!matches && <TableDesktop difficulty={difficulty} />}
    </Fragment>
  );
};
