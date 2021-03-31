import { useContext, useEffect, useState } from 'react';
import { useMedia } from 'hooks/useMedia';
import { URL } from '../backend/config';

export const useFetchData = () => {
  const [isRegion, setRegion] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [isOrder, setOrder] = useState(false);
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

  const orderHandler = (e) => {
    const { value } = e.target;

    setOrder(value);
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
    const withOrder = `&sortkey=${isOrder}`;
    const generateUrl =
      url +
      (isRegion ? withRegion : '') +
      (isSearch ? withSearch : '') +
      (isOrder ? withOrder : '');

    setUrl(generateUrl);
  }, [isRegion, isSearch, isPage, isOrder]);

  useEffect(async () => {
    setLoading(true);

    try {
      const req = await Promise.all([fetch(isUrl), fetch(regionUrl)]);
      const [data, regions] = await Promise.all(req.map((res) => res.json()));

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
    orderHandler,
    setOrder,
  };
};
