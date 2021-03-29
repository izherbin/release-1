import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableIndex } from 'components/layout/SearchTable/TableEls/TableIndex';
import { modPrice } from 'utils/modPrice';
import { TableGrowth } from 'components/layout/SearchTable/TableEls/TableGrowth';
import { TableAnomaly } from 'components/layout/SearchTable/TableEls/TableAnomaly';
import { TableDifficulty } from 'components/layout/SearchTable/TableEls/TableDifficulity/TableDifficulty';
import { TableSave } from 'components/layout/SearchTable/TableEls/TableSave/TableSave';

const useStyles = makeStyles(({ palette: { primary }, breakpoints }) => ({
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
    borderRight: `1px solid ${primary.main}`,
  },
  opacity60: {
    opacity: '0.6',
  },
  opacity20: {
    opacity: '0.2',
    borderRadius: (index) => (index === 19 ? '0' : '0 0 4px 4px'),
  },
  seasonStyle: {
    [breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
  },
}));

export const TableEl = ({ data, sizes, index }) => {
  console.log('TableEl -> data', data);
  const { container, element, opacity60, opacity20, seasonStyle } = useStyles({ sizes, index });
  const { niche, volume, trend } = data;
  const season = <div className={seasonStyle}>{trend}</div>;

  const content = [
    <TableIndex index={index} />,
    niche,
    modPrice(volume),
    <TableGrowth data={data} />,
    season,
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
        <div style={{ width: sizes[i] }} className={`${element}`} key={`${i}table`}>
          {el}
        </div>
      ))}
    </div>
  );
};
