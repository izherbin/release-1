import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableEl } from 'components/layout/SearchTable/TableEls/TableEl';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {},
}));

export const TableEls = ({ sizes, isData, isPage }) => {
  const { container } = useStyles();
  const arrLength = isData.length;

  return (
    <div className={container}>
      {isData.map((el, i) => (
        <TableEl
          data={el}
          index={i}
          sizes={sizes}
          key={`${i}table`}
          isPage={isPage}
          arrLength={arrLength}
        />
      ))}
    </div>
  );
};
