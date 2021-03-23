import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { accent, green } }) => ({
  green: {
    color: green,
  },
  red: {
    color: accent,
  },
}));

export const TableAnomaly = ({ data }) => {
  const { green, red } = useStyles();

  return (
    <Fragment>
      <span className={green}>{`${data.anomaly[0]} `}</span>
      <span style={{ margin: '0 8px' }}>/</span>
      <span className={red}>{`${data.anomaly[1]}`}</span>
    </Fragment>
  );
};
