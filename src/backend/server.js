/* eslint-disable import/extensions, import/no-extraneous-dependencies */
const express = require('express');
const mongoose = require('mongoose');
const regions = require('./models/regions');
// const db = require('./db');

const MONGO_USERNAME = 'izherbin';
const MONGO_PASSWORD = '22uF5EcHm9';
const MONGO_HOSTNAME = '45.80.71.95';
const MONGO_PORT = '27017';
const MONGO_DB = 'Superiority';
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]

const getRegions = async function () {
  const arr = await regions.find({}, (err) => {
    if (err) {
      console.log('Ошибка в поиске регионов', err);
    }
  });
  const res = [];
  console.log('res', res);
  for (let i = 0; i < arr.length; i++) {
    res.push({
      name: arr[i].name,
      country: arr[i].country,
    });
  }
  return res;
};

const app = express();

const port = process.env.PORT || 8280;

app.get('/regions', async (req, res) => {
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => console.log('Есть соединение...'),
    (err) => console.log('Ошибка соединения: ', err),
  );

  const getData = await getRegions();

  console.log('getData', getData);
  const response = res.send(getData);

  return response;
});

app.listen(port);
