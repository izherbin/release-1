import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    display: 'flex',
    position: 'relative',
    padding: '6px 6px 6px 16px',
    maxWidth: '208px',
    '&:hover': {
      transition: '0.3s',
      backgroundColor: primary.hover,
      '&:after': {
        position: 'absolute',
        bottom: '0',
        left: '0',
        content: '""',
        width: '208px',
        height: '2px',
        backgroundColor: primary.main,
      },
      '&:before': {
        position: 'absolute',
        top: '0',
        left: '0',
        content: '""',
        width: '208px',
        height: '1px',
        backgroundColor: primary.main,
      },
    },
  },
  image: {
    position: 'absolute',
    right: '0',
    top: '10px',
    transform: 'rotate(-90deg)',
  },
}));

export const DropElement = ({ name = 'Россия', index }) => {
  const { container, image } = useStyles();

  return (
    <div className={container}>
      {name}
      {index === 4 && <img src="icons/down.svg" alt="" className={image} />}
    </div>
  );
};
