import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableHeaderEl } from 'components/layout/SearchTable/TableHeaderEl';
import { useOrderToggle } from 'hooks/useOrderToggle';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '40px',
    borderRadius: '4px 4px 0 0',
    backgroundColor: primary.header,
  },
}));

export const TableHeader = ({ sizes }) => {
  const { container } = useStyles();
  const { isOrdered, orderHandler, isUp } = useOrderToggle();

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
        <TableHeaderEl
          name={el}
          sizes={sizes}
          index={i}
          isOrdered={isOrdered}
          orderHandler={orderHandler}
          isUp={isUp}
        />
      ))}
    </div>
  );
};
