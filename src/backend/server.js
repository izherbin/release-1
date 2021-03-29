/* eslint-disable import/extensions, import/no-extraneous-dependencies */
import cors from 'cors';
import express from 'express';
import { getRegions } from './getRegions.js';
import { getTableRows, getTableLength } from './getTableRows.js';
import { corsOptions } from './config.js';

export const countArray = async () => {
  const arr = await getTableRows();
  return arr.length;
};

export const searchBase = (exp) => getTableRows(exp);
export const regionSort = (region) => getTableRows(null, region);
export const dataSlice = (begin, end) => getTableRows(null, null, begin, end);

const app = express();
app.use(cors());

const port = process.env.PORT || 8280;

app.get('/regions', cors(corsOptions), async (req, res) => {
  const getData = await getRegions();
  const response = res.status(200).send(getData);

  return response;
});

app.get('/data', cors(corsOptions), async (req, res) => {
  const {
    query: { region, page, perPage, search },
  } = req;
  console.log('req', req.url);

  const pagesNumber = countArray();
  const pagesToSlice = (pageNum = page, perPageNum = perPage) => {
    const start = Number(pageNum * perPageNum);
    const end = start + Number(perPageNum);

    return [start, end];
  };
  const [start, end] = pagesToSlice();
  const data = await getTableRows(search || null, region || null, start, end);
  console.log('getTableRows.length', data.length);
  const length = await getTableLength(search || null, region || null);
  console.log('length', length);

  // const getData = await getTableRows();
  const response = res.status(200).send([data, length]);

  return { response, length };
});

app.listen(port);
