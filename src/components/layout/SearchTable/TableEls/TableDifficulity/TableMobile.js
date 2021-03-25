import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 4px',
  },
  number: {
    transform: ' translateY(1px)',
  },
}));

export const TableMobile = ({ difficulty }) => {
  const { container, number } = useStyles();

  return (
    <Fragment>
      <div className={number}>{difficulty}</div>
      {!Number.isInteger(difficulty) && <img src="icons/half_star.svg" className={container} />}
    </Fragment>
  );
};
