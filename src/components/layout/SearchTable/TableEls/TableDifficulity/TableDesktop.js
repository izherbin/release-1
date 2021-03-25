import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { calcStars } from 'utils/calcStars';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 2px',
  },
}));

export const TableDesktop = ({ difficulty }) => {
  const { container } = useStyles();

  return (
    <Fragment>
      {calcStars(container, difficulty)}
      {!Number.isInteger(difficulty) && <img src="icons/half_star.svg" className={container} />}
    </Fragment>
  );
};
