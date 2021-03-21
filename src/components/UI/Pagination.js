import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { blue } }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
  },
  page: {
    cursor: 'pointer',
    marginRight: '16px',
    padding: '10px 14px',
    border: '1px solid transparent',
    borderRadius: '4px',
    '&:hover': {
      transition: ' 0.3s',
      border: `1px solid ${blue}`,
    },
  },
}));

export const Pagination = ({}) => {
  const { container, page } = useStyles();
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className={container}>
      {pages.map((el, i) => (
        <div className={page}>{i + 1}</div>
      ))}
      далее
    </div>
  );
};
