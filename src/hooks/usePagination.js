import { useState, useEffect } from 'react';

export const usePagination = (num) => {
  const [isNumber, setNumber] = useState(234);
  const [curPage, setCurPage] = useState(1);
  const startPages = [1, 2, 3, 4, 5];
  const [isPages, setPages] = useState(startPages);

  const numberOfPages = [...new Array(isNumber)].filter((_, i) => i % num === 0).length;

  const checkIfexist = (n) => curPage + n <= numberOfPages;

  const twoBefore = [checkIfexist(-1) && curPage - 2, checkIfexist(-2) && curPage - 1].filter(
    (el) => el,
  );
  const twoAfter = [checkIfexist(1) && curPage + 1, checkIfexist(2) && curPage + 2].filter(
    (el) => el,
  );
  const current = checkIfexist(0) && curPage;

  useEffect(() => {
    if (curPage < 5) return setPages(startPages);

    return setPages([...twoBefore, current, ...twoAfter]);
  }, [curPage]);

  const paginationHandler = (n = false) => (e) => {
    const currentId = Number(e.target.id);
    if (!n) return setCurPage(currentId);

    return setCurPage(curPage + n);
  };

  return { isPages, curPage, paginationHandler, checkIfexist };
};
