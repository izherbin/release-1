import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { usePagination } from 'hooks/usePagination';
import { useMedia } from 'hooks/useMedia';

const useStyles = makeStyles(({ palette: { blue }, breakpoints }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    userSelect: 'none',
    [breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginRight: '4px',
    width: '40px',
    height: '40px',
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

export const Pagination = ({ pageHandler, pages, isSearch, isRegion }) => {
  const { container, page, selected } = useStyles();
  const { isPages, curPage, paginationHandler, checkIfexist } = usePagination(
    20,
    pages,
    isRegion,
    isSearch,
  );
  const checkIfSelected = (el) => (curPage === el ? selected : '');
  const { matchesMobile } = useMedia();
  const multipleOnclicks = (e) => {
    paginationHandler()(e);
    pageHandler(e);
  };

  return (
    <div className={container}>
      {isPages.map((el, i) => (
        <div
          className={`${page} ${checkIfSelected(el)}`}
          id={el}
          onClick={multipleOnclicks}
          key={`${i}pagination`}
        >
          {el}
        </div>
      ))}
      {!matchesMobile && checkIfexist(1) && (
        <span onClick={paginationHandler(1)} style={{ cursor: 'pointer', marginLeft: '12px' }}>
          Далее
        </span>
      )}
    </div>
  );
};
