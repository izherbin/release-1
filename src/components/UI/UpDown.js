import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UpIcon } from 'components/UI/Icons/UpIcon';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
  },
}));

export const UpDown = ({ index, orderHandler, ...rest }) => {
  const { container } = useStyles();
  const shiftIndex = index - 1;
  const names = ['niche', 'volume', 'growth', 'trend'];

  return (
    <div className={container} onClick={orderHandler} id={names[shiftIndex]}>
      <UpIcon index={shiftIndex} names={names} {...rest} />
    </div>
  );
};
