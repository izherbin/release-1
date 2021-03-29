import { useState } from 'react';

/* eslint-disable */
export const useRegionSelect = (regions, regionHandler) => {
	const [isSelected, setSelected] = useState('Регион запуска бизнеса');

  const filteredRussia =
    regions &&
    regions
      .filter((el) => el.country === 'Россия')
      .map((el) => {
        if (el.name === "" && el.country === 'Россия') {
          el.name = 'Вся Россия';
          el.country = 'Россия';

          return el;
        }

        return el;
      });

	// const filteredCountries = regions && regions.filter((el) => el.country !== 'Россия');
	
  const selectHandler = (e) => {
    const name = e.target.id;
    if (name === 'Вся Россия') return [setSelected(name), regionHandler(null)];
    if (name !== 'Россия') return [setSelected(name), regionHandler(name)];
  };

  return { filteredRussia, selectHandler, isSelected };
};
