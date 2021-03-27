import { db } from './db.js';
import { regions } from './models/regions.js';

export const getRegions = async function () {
  const arr = await regions.find({}, (err) => {
    if (err) {
      console.log('Ошибка в поиске регионов', err);
    }
  });
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push({
      name: arr[i].name,
      country: arr[i].country,
    });
  }
  return res;
};
