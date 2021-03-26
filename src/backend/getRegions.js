const db = require('./db');
const regions = require('./models/regions');

module.exports = async function() {
    // console.log('Начали...');

    // let numberRegions = await getNumRegions();
    // console.log('Всего регионов:', numberRegions);
    // let arr = await regions.find({}).exec((err) => {
    let arr = await regions.find({}, (err) => {
        if(err) {
            console.log('Ошибка в поиске регионов', err);
        }        
    });
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push({
            name    : arr[i].name,
            country : arr[i].country,
        })
    }
    return res;
}

// function getNumRegions() {
//     let count = regions.find({}).countDocuments((err) => {
//         if(err) {
//             console.log('Ошибка в определении количества регионов:', err);
//         }
//     });
//     return count;
// }
