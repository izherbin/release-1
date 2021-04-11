/* eslint-disable import/extensions, import/no-extraneous-dependencies */
import cors from 'cors';
import express from 'express';
import { getRegions } from './getRegions.js';
import { getTableRows } from './getTableRows.js';
import { corsOptions } from './config.js';

const app = express();
app.use(cors());

const port = process.env.PORT || 8280;
// const port = process.env.PORT || 3000;

app.get('/regions', cors(corsOptions), async (req, res) => {
  const getData = await getRegions();

  res.status(200).send(getData);
});

app.get('/data', cors(corsOptions), async (req, res) => {
  const {
    query: { region, page, perPage, search, sortkey, sortorder },
  } = req;

  const pagesToSlice = (pageNum = Number(page), perPageNum = Number(perPage)) => {
    const start = pageNum * Math.round(perPageNum) - Math.round(perPageNum);
    const end = start + perPageNum;

    return [start, end];
  };

  const [start = 0, end = 19] = pagesToSlice();
  const { res: data, arrLength: length } = await getTableRows(
    search || null,
    region || null,
    start,
    end,
    sortkey || null,
    sortorder || null,
  );

  res.status(200).send([data, length]);
});

app.listen(port, () => {
  console.log(`Сервер backend запущен на порту ${port}...`)
})