import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    display: 'flex',
  },
  shared: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    cursor: 'pointer',
  },
  right: {
    borderLeft: `1px solid ${primary.main}`,
    height: '40px',
  },
}));

export const TableSaveDt = ({}) => {
  const { container, shared, right } = useStyles();

  return (
    <div className={container}>
      <div className={shared}>
        <img src="icons/plus.svg" />
      </div>
      <div className={`${right} ${shared}`}>
        <img src="icons/telegram.svg" />
      </div>
    </div>
  );
};
