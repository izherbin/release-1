/* eslint-disable import/extensions, import/no-extraneous-dependencies */
import cors from 'cors';
import express from 'express';
import { getRegions } from './getRegions.js';
import { getTableRows } from './getTableRows.js';
import { corsOptions } from './config.js';

export const countArray = () => getTableRows.length;
export const searchBase = (exp) => getTableRows(exp);
export const regionSort = (region) => getTableRows(null, region);
export const dataSlice = (begin, end) => getTableRows(null, null, begin, end);

const app = express();
app.use(cors());

const port = process.env.PORT || 8280;

app.get('/regions', cors(corsOptions), async (req, res) => {
  const getData = await getRegions();
  const response = await res.status(200).send(getData);

  return response;
});

app.get('/data', cors(corsOptions), async (req, res) => {
  const {
    query: { region, page, perPage, search },
  } = req;

  const pagesNumber = countArray();
  const pageToSlice = (pageNum = page, perPageNum = perPage) => {
    const start = pageNum * perPageNum;
    const end = pageNum * perPageNum + 20;

    return regionSort(start, end);
  };

  const getData = () => {
    if (region) return regionSort(region);
    if (page) return pageToSlice();

    return searchBase(search);
  };
  const allData = [await getData(), pagesNumber];
  // const getData = await getTableRows();
  const response = await res.status(200).send(allData);

  return { response, pagesNumber };
});

app.listen(port);
