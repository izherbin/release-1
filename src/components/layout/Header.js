import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from 'components/UI/Logo';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '77px',
  },
}));

export const Header = ({}) => {
  const { container } = useStyles();

  return (
    <div className={container}>
      <Logo />
    </div>
  );
};
