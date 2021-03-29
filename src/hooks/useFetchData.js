import { useContext, useEffect, useState } from 'react';
import { URL } from '../backend/config';

export const useFetchData = () => {
  const [isRegion, setRegion] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [isPage, setPage] = useState(1);
  const defaultUrl = `${URL}/data?page=${isPage}&perPage=20`;
  const [isUrl, setUrl] = useState(defaultUrl);

  const [isLoading, setLoading] = useState(false);

  const [isData, setData] = useState([]);
  // при клике передаем номер страницы из ID
  // смотрим активен ли фильтр страна
  // если активен, то вставляем его в конец урла
  // смотрим активен ли фильтр по слову
  const pageHandler = (e) => {
    const { id } = e.target;
    setPage(id);
  };

  const regionHandler = (e) => {
    const { id } = e.target;
    setRegion(id);
  };

  const searchHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    const url = `${URL}/data?page=${isPage}&perPage=20`;
    const withRegion = `&region=${isRegion}`;
    const withSearch = `&search=${isSearch}`;
    const generateUrl = url + (isRegion ? withRegion : '') + (isSearch ? withSearch : '');

    setUrl(generateUrl);
  }, [isRegion, isSearch, isPage]);

  useEffect(async () => {
    setLoading(true);

    try {
      const req = await fetch(isUrl);
      const json = await req.json();
      const [data, pages] = json;

      setData(data);
    } catch (error) {
      console.log('error');
    }

    setLoading(false);
  }, [isUrl]);

  return { isData, isLoading, pageHandler, regionHandler, searchHandler };
};
