import { useState } from 'react';

/* eslint-disable */
export const useRegionSelect = (isData) => {
	const [isSelected, setSelected] = useState('Регион запуска бизнеса');

  const filteredRussia =
    isData &&
    isData
      .filter((el) => el.country === 'Россия')
      .map((el) => {
        if (el.name === "" && el.country === 'Россия') {
          el.name = 'Вся Россия';
          el.country = 'Россия';

          return el;
        }

        return el;
      });

	const filteredCountries = isData && isData.filter((el) => el.country !== 'Россия');
	
  const selectHandler = (e) => {
    const name = e.target.id;
    if (name !== 'Россия') return setSelected(name);
  };

  return { filteredRussia, filteredCountries, selectHandler, isSelected };
};
