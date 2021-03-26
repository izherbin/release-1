import { useContext, useEffect, useState } from 'react';
// import { LOGOUT } from 'components/state/constants';
// import { AuthContext } from 'components/state/context/auth-context';
// import { cookiesGet, cookiesSet } from 'components/state/cookies';
// import { URL, headers } from 'backend/config';
// import firebase from 'firebase/app';
// import { firebaseConfig } from 'backend/firebase/config';

export const useFetchData = () => {
  const [isData, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const URL = 'localhost:8280/regions';

  // const {
  //   dispatch,
  //   authState: { isAdmin },
  // } = authContext;

  const [isToken, setToken] = useState(null);

  /*  check if token exist and correct and get user data */
  useEffect(async () => {
    // const { loginHeader } = headers;
    const url = `${URL}`;
    setLoading(true);

    // if (!isToken || isAdmin) return;

    try {
      // const token = cookiesGet('token_salary');
      const req = await fetch(url);
      console.log('useFetchData -> req', req);
      const json = await req.json();
      console.log('useFetchData -> json', json);

      setData(json);
    } catch (error) {
      console.log('error');
      // dispatch({ type: LOGOUT });
    }

    setLoading(false);
  }, [isToken]);

  return { isData, isLoading };
};
