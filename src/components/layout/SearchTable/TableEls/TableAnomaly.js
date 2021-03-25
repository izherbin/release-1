import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(({ palette: { accent, green }, breakpoints }) => ({
  container: {
    display: 'flex',
    [breakpoints.down('md')]: {
      display: 'block',
    },
    [breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  green: {
    color: green,
  },
  red: {
    color: accent,
  },
}));

export const TableAnomaly = ({ data: { anomaly } }) => {
  const { container, green, red } = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only('md'));

  return (
    <div className={container}>
      <div className={green}>{`${anomaly[0]} `}</div>
      {!matches && <span style={{ margin: '0 8px' }}>/</span>}
      <div className={red}>{`${anomaly[1]}`}</div>
    </div>
  );
};
