import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableEl } from 'components/layout/SearchTable/TableEls/TableEl';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {},
}));

export const TableEls = ({ sizes, data, isPage }) => {
  const { container } = useStyles();
  const arrLength = data.length;

  return (
    <div className={container}>
      {data.map((el, i) => (
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
