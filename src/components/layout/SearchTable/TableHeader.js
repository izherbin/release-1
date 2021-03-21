import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableHeaderEl } from 'components/layout/SearchTable/TableHeaderEl';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '40px',
    backgroundColor: primary.header,
  },
}));

export const TableHeader = ({ sizes }) => {
  const { container } = useStyles();
  const elemetNames = [
    '#',
    'Название отрасли / ниши',
    'Объем рынка',
    'Рост за год',
    'Сезонность',
    'Аномалии',
    'Сложность запуска',
    'Сохраненные',
  ];

  return (
    <div className={container}>
      {elemetNames.map((el, i) => (
        <TableHeaderEl name={el} sizes={sizes} index={i} />
      ))}
    </div>
  );
};
