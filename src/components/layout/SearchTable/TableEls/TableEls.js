import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableEl } from 'components/layout/SearchTable/TableEls/TableEl';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {},
}));

export const TableEls = ({ sizes }) => {
  const { container } = useStyles();
  const content = [...new Array(20)].map(() => {
    return {
      name: 'Бизнес аналитика',
      volume: 1000000,
      growth: '+15.0%',
      season: '08/2020 - 02/2021',
      anomaly: [10, 10],
      difficulty: 4.5,
    };
  });

  return (
    <div className={container}>
      {content.map((el, i) => (
        <TableEl data={el} index={i} sizes={sizes} key={`${i}table`} />
      ))}
    </div>
  );
};
