import { useContext, useEffect, useState } from 'react';

export const useFetchData = () => {
  const [isData, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const URL = 'localhost/regions?data=foo';
  // const URL = 'http://45.80.71.95:8280/regions';

  useEffect(async () => {
    setLoading(true);

    try {
      const req = await fetch(URL);
      const json = await req.json();

      setData(json);
    } catch (error) {
      console.log('error');
    }

    setLoading(false);
  }, []);

  return { isData, isLoading };
};
