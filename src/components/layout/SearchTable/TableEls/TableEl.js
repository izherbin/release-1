import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { tableElements } from 'components/layout/SearchTable/TableEls/tableElements';

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
    borderRadius: (countLast) => (countLast ? '0 0 4px 4px' : '0'),
  },
  left: {
    justifyContent: 'left',
    paddingLeft: '16px',
  },
}));

export const TableEl = ({ isPage, data, sizes, index, arrLength }) => {
  const countBeforeLast = arrLength === index + 2;
  const countLast = arrLength === index + 1;
  const { container, element, opacity60, opacity20, left } = useStyles({
    sizes,
    countLast,
  });

  const content = tableElements({ ...data }, isPage, index);

  const checkIndex = () => {
    if (countBeforeLast) return opacity60;
    if (countLast) return opacity20;

    return '';
  };

  return (
    <div className={`${container} ${checkIndex()}`}>
      {content.map((el, i) => (
        <div
          style={{ width: sizes[i] }}
          className={`${element} ${i === 1 ? left : ''}`}
          key={`${i}table`}
        >
          {el}
        </div>
      ))}
    </div>
  );
};
