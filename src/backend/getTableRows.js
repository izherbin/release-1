const db = require('./db');
const requests = require('./models/requests');

const MONTHS_IN_YEAR = 12;
const COEFF_TREND_SURPLUS = 1.0;

module.exports = async function getTableRows(expr, region, begin, end, sortkey, sortorder) {
  const searchniche = expr ? `^${expr}` : '.*';
  const searchreg = region || '.*';

  const filter = { nameniche: { $regex: searchniche }, namereg: { $regex: searchreg } };
  // let arr = await requests.find(filter, (err) => {
  //     if(err) {
  //         console.log('Ошибка в запросах', err);
  //     }
  // });
  const arr = await requests
    .find(filter)
    .skip(begin)
    .limit(end - begin);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    // let vol = sumLastYear(arr[i].volumes);
    // let grwth = growthLastYear(arr[i].volumes);
    // let trnd = trendSeason(arr[i].volumes, 2);
    res.push({
      number: i + 1,
      niche: arr[i].nameniche,
      volume: sumLastYear(arr[i].volumes),
      growth: growthLastYear(arr[i].volumes),
      trend: trendSeason(arr[i].volumes, 2),
    });
  }
  return res;
};

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

function growthLastYear(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sumLastYear(array) / (sum - sumLastYear(array)) - 1;
}

function trendSeason(array, lastperiod) {
  if (array.length < MONTHS_IN_YEAR) return '';
  const averageLastYear = sumLastYear(array) / MONTHS_IN_YEAR;
  const arrLastYear = array.slice(-MONTHS_IN_YEAR);
  const arrTrend = [];

  for (i = 0; i < MONTHS_IN_YEAR; i++) {
    if (arrLastYear[i] > averageLastYear * COEFF_TREND_SURPLUS) {
      const seasonpeek = lastperiod - i > 0 ? lastperiod - i : lastperiod - i + MONTHS_IN_YEAR;
      arrTrend.push(String(seasonpeek));
    }
  }
  return arrTrend.join(', ');
}
