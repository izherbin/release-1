const regions = require('./regions');

const getRegions = () => console.log(123);

// const getRegions = async function () {
//   const arr = await regions.find({}, (err) => {
//     if (err) {
//       console.log('Ошибка в поиске регионов', err);
//     }
//   });
//   const res = [];
//   console.log('res', res);
//   for (let i = 0; i < arr.length; i++) {
//     res.push({
//       name: arr[i].name,
//       country: arr[i].country,
//     });
//   }
//   return res;
// };

exports.getRegions = getRegions;
