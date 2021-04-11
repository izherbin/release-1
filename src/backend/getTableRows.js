import { requests_ } from './models/requests_.js';
import { db } from './db.js';

const MONTHS_IN_YEAR = 12;
const COEFF_TREND_SURPLUS = 1.0;
const START_PERIOD = 2;

export const getTableRows = async function (expr, region, begin, end, sortkey, sortorder) {
  const searchniche = expr ? `^${expr}` : '.*';
  const searchreg = region || '.*';

  const filter = {
    nameniche: { $regex: searchniche },
    namereg: { $regex: searchreg },
  };
  // console.log("~ filter", filter);
  const arr = await requests_.find(filter);      //* Запрос к БД

  // let arrLength = await requests.find(filter).countDocuments();

  const res = [];
  // console.log('~ arr.length', arr.length);
  // console.log('~ arr[0].nameniche', arr[0].nameniche);
  // console.log('До редьюса:  ', timestamp());
  const reduced = new reduceResult(arr);
  // console.log('После редьюса:  ', timestamp());
  // console.log('~ reduced.length', reduced.length);
  // console.log('~ reduced[0].nameniche', reduced[0].nameniche);
  const arrLength = reduced.length;

  const sliced = reduced.slice(isNaN(begin) ? undefined : begin, isNaN(end) ? undefined : end);
  // console.log('~ begin', isNaN(begin) ? undefined : begin);
  // console.log('~ end', isNaN(end) ? undefined : end);
  // console.log('~ arrLength', arrLength);
  // console.log('~ sliced.length', sliced.length);
  // console.log('~ sliced[0].nameniche', sliced[0].nameniche);

  sliced.map((_, i) => {
    // console.log('~ i = ', i);
    // console.log('~ sliced[i].nameniche', sliced[i].nameniche);
    res.push({
      number: i + 1,
      niche: sliced[i].nameniche,
      volume: sumLastYear(sliced[i].volumes),
      growth: Math.round(growthLastYear(sliced[i].volumes) * 1000) / 1000,
      trend: trendSeason(sliced[i].volumes, START_PERIOD),
    });
  });
  // console.log("~ arrLength", arrLength);
  // console.log("~ res.length", res.length);
  // console.log("~ arr.length", arr.length);

  // console.log('~ res[0].niche', res[0].niche);
  res.sort((a, b) => compareRows(a, b, sortkey, sortorder));
  // console.log('~ res[0].niche', res[0].niche);
  // console.log('~ res[0].volume', res[0].volume);
  return { res, arrLength };
};

function timestamp() {
  const stamp = new Date();
  return stamp.getSeconds() * 1000 + stamp.getMilliseconds();
}

function sumLastYear(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (i < MONTHS_IN_YEAR) {
      sum += array[i];
    } else {
      break;
    }
  }
  return sum;
}

function compareRows(a, b, sortkey, sortorder) {
  switch (sortkey) {
    case 'volume':
      return (a.volume - b.volume) * sortorder;
    case 'growth':
      return (a.growth - b.growth) * sortorder;
    case 'trend':
      return (a.trend.split(', ')[0] - b.trend.split(', ')[0]) * sortorder;
    case 'niche':
    default:
      if (a.name > b.name) {
        return sortorder;
      }
      if (a.name == b.name) {
        return 0;
      }
      return sortorder;
  }
}

function isInCollection(item, array) {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) return true;
  }
  return false;
}

function getNichesFromRequests(requests) {
  if (!requests.length) return null;

  const niches = [];
  for (let i = 0; i < requests.length; i++) {
    // const { nameniche } = requests[i].toObject();
    const { nameniche } = requests[i];
    if (!isInCollection(nameniche, niches)) niches.push(nameniche);
  }
  return niches;
}

function reduceResult(requests) {
  if (!requests.length) return requests;
  const reduce = [];
  const niches = getNichesFromRequests(requests);

  for (let i = 0; i < niches.length; i++) {
    let sumvol = [];
    for (let j = 0; j < requests.length; j++) {
      // const { nameniche } = requests[j].toObject();
      const { nameniche } = requests[j];
      if (niches[i] == nameniche) {
        sumvol = sumarr(sumvol, requests[j].volumes);
      }
    }
    reduce.push({
      nameniche: niches[i],
      volumes: sumvol,
    });
  }
  console.log('~ reduce.length', reduce.length);
  return reduce;
}

// Сумма массивов разной длины
function sumarr(arr1, arr2) {
  const res = [];
  const length = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < length; i++) {
    const a1 = arr1[i] === undefined ? 0 : arr1[i];
    const a2 = arr2[i] === undefined ? 0 : arr2[i];
    res.push(a1 + a2);
  }
  return res;
}

function growthLastYear(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sumLastYear(array) / (sum - sumLastYear(array)) - 1;
}

function trendSeason(array, lastperiod) {
  const months = [...new Array(MONTHS_IN_YEAR)];

  if (array.length < MONTHS_IN_YEAR) return '';

  const averageLastYear = sumLastYear(array) / MONTHS_IN_YEAR;
  const arrLastYear = array.slice(-MONTHS_IN_YEAR);
  const arrTrend = [];

  months.map((_, i) => {
    if (arrLastYear[i] > averageLastYear * COEFF_TREND_SURPLUS) {
      const seasonpeek = lastperiod - i > 0 ? lastperiod - i : lastperiod - i + MONTHS_IN_YEAR;
      arrTrend.push(String(seasonpeek));
    }
  });
  return arrTrend
    .sort((a, b) => {
      return a - b;
    })
    .join(', ');
}
