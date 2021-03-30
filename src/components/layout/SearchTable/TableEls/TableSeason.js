import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    [breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
  },
}));

export const TableSeason = ({ trend }) => {
  const { container } = useStyles();
  const checkTrend = trend || '-';

  return <div className={container}>{checkTrend}</div>;
};
