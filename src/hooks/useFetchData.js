import { useContext, useEffect, useState } from 'react';
import { useMedia } from 'hooks/useMedia';
import { URL } from '../backend/config';

export const useFetchData = () => {
  const [isRegion, setRegion] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [isPage, setPage] = useState(1);
  const regionUrl = `${URL}/regions`;
  const defaultUrl = `${URL}/data?page=${isPage}&perPage=20`;
  const [isUrl, setUrl] = useState(defaultUrl);
  const { matchesMobile } = useMedia();
  const [isLoading, setLoading] = useState(false);

  const [isData, setData] = useState([]);
  const pageHandler = (e) => {
    const { id } = e.target;
    setPage(id);
  };

  const regionHandler = (e) => {
    setRegion(e);
  };

  const searchHandler = (e) => {
    const { value } = e.target;
    const lowerCase = value.toLowerCase();

    setSearch(lowerCase);
  };

  useEffect(() => {
    setPage(1);
  }, [isRegion, isSearch]);

  useEffect(() => {
    const perPage = matchesMobile ? '1' : '20';
    const url = `${URL}/data?page=${isPage}&perPage=${perPage}`;
    const withRegion = `&region=${isRegion}`;
    const withSearch = `&search=${isSearch}`;
    const generateUrl = url + (isRegion ? withRegion : '') + (isSearch ? withSearch : '');

    setUrl(generateUrl);
  }, [isRegion, isSearch, isPage]);

  useEffect(async () => {
    setLoading(true);

    try {
      const req = await Promise.all([fetch(isUrl), fetch(regionUrl)]);

      const [data, regions] = await Promise.all(req.map((res) => res.json()));
      // const [data, pages] = data;

      setData({ data, regions });
    } catch (error) {
      console.log('error');
    }

    setLoading(false);
  }, [isUrl]);

  return {
    isData,
    isPage,
    isSearch,
    isRegion,
    isLoading,
    pageHandler,
    regionHandler,
    searchHandler,
  };
};
