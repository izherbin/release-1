import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { calcStars } from 'utils/calcStars';

const useStyles = makeStyles(() => ({
  image: {
    padding: '0 2px',
  },
}));

export const TableDifficulty = ({ data: { difficulty } }) => {
  const { image } = useStyles();

  return (
    <Fragment>
      {calcStars(image, difficulty)}
      {!Number.isInteger(difficulty) && <img src="icons/half_star.svg" className={image} />}
    </Fragment>
  );
};
