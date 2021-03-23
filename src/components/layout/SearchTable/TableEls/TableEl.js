import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableIndex } from 'components/layout/SearchTable/TableEls/TableIndex';
import { modPrice } from 'utils/modPrice';
import { TableGrowth } from 'components/layout/SearchTable/TableEls/TableGrowth';
import { TableAnomaly } from 'components/layout/SearchTable/TableEls/TableAnomaly';
import { TableDifficulty } from 'components/layout/SearchTable/TableEls/TableDifficulty';
import { TableSave } from 'components/layout/SearchTable/TableEls/TableSave';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    display: 'flex',
    textAlign: 'center',
    borderBottom: `1px solid ${primary.main}`,
    backgroundColor: primary.dim,
  },
  element: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    whiteSpace: 'pre-wrap',
    borderRight: `1px solid ${primary.main}`,
  },
  opacity60: {
    opacity: '0.6',
  },
  opacity20: {
    opacity: '0.2',
  },
}));

export const TableEl = ({ data, sizes, index }) => {
  const { container, element, opacity60, opacity20 } = useStyles({ sizes, index });
  const modData = `${data.name} ${index}`;

  const content = [
    <TableIndex index={index} />,
    modData,
    modPrice(data.volume),
    <TableGrowth data={data} />,
    data.season,
    <TableAnomaly data={data} />,
    <TableDifficulty data={data} />,
    <TableSave />,
  ];

  const checkIndex = () => {
    if (index === 18) return opacity60;
    if (index === 19) return opacity20;
  };

  return (
    <div className={`${container} ${checkIndex()}`}>
      {content.map((el, i) => (
        // <div style={{ width: sizes[i] }} className={`${element} ${checkIndex()}`}>
        <div style={{ width: sizes[i] }} className={`${element}`}>
          {el}
        </div>
      ))}
    </div>
  );
};
