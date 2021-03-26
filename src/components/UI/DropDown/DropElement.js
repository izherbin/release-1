/* eslint-disable */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useToggle } from 'hooks/useToggle';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    display: 'flex',
    position: 'relative',
    padding: ({ russia }) => (russia ? '6px 6px 6px 32px' : '6px 0px 6px 16px'),
    maxWidth: '208px',
    backgroundColor: ({ isToggle }) => isToggle && primary.hover,
    '&:hover': {
      transition: '0.3s',
      backgroundColor: primary.hover,
      '&:after': {
        position: 'absolute',
        bottom: '0',
        left: '0',
        content: '""',
        width: '208px',
        height: '1px',
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
    right: '4px',
    top: '10px',
    transform: ({ isToggle }) => (isToggle ? 'rotate(0deg) ' : 'rotate(-90deg)'),
  },
}));

export const DropElement = ({
  object: { name = 'Россия', country },
  handler,
  first = false,
  russia = false,
  isToggle,
  selectHandler,
}) => {
  const { container, image } = useStyles({ russia, isToggle });
  const handlers = (e) => [handler(), selectHandler(e)];

  return (
    <div className={container} id={name === "" ? country : name } onClick={handlers}>
      {name || country}
      {first && <img src="icons/down.svg" className={image} />}
    </div>
  );
};
