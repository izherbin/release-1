import { useState, useEffect } from 'react';

export const usePagination = (num, pages, isRegion, isSearch) => {
  const [curPage, setCurPage] = useState(1);
  const pagesArray = [...new Array(pages)].filter((_, i) => i % num === 0);
  const startPages = pagesArray.map((_, i) => i + 1).slice(0, 5);

  const [isPages, setPages] = useState(startPages);
  const numberOfPages = pagesArray.length;

  const checkIfexist = (n) => curPage + n <= numberOfPages;

  const twoBefore = [checkIfexist(-1) && curPage - 2, checkIfexist(-2) && curPage - 1].filter(
    (el) => el,
  );
  const twoAfter = [checkIfexist(1) && curPage + 1, checkIfexist(2) && curPage + 2].filter(
    (el) => el,
  );
  const current = checkIfexist(0) && curPage;

  useEffect(() => {
    setCurPage(1);
  }, [isRegion, isSearch]);

  useEffect(() => {
    setPages(startPages);
  }, [pages]);

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
