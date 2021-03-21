import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { usePagination } from 'hooks/usePagination';

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
  selected: {
    transition: ' 0.3s',
    border: `1px solid ${blue}`,
  },
}));

export const Pagination = ({}) => {
  const { container, page, selected } = useStyles();
  const { isPages, curPage, pagesHandler, checkIfexist } = usePagination(20);
  const checkIfSelected = (el) => (curPage === el ? selected : '');

  return (
    <div className={container}>
      {curPage >= 5 && (
        <span onClick={pagesHandler(-1)} style={{ cursor: 'pointer' }}>
          назад
        </span>
      )}
      {isPages.map((el) => (
        <div className={`${page} ${checkIfSelected(el)}`} id={el} onClick={pagesHandler()}>
          {el}
        </div>
      ))}
      {checkIfexist(+1) && (
        <span onClick={pagesHandler(1)} style={{ cursor: 'pointer' }}>
          далее
        </span>
      )}
    </div>
  );
};
