/* eslint-disable import/extensions, import/no-extraneous-dependencies */
import cors from 'cors';
import express from 'express';
import { getRegions } from './getRegions.js';
import { getTableRows } from './getTableRows.js';
import { corsOptions } from './config.js';

const app = express();
app.use(cors());

const port = process.env.PORT || 8280;

app.get('/regions', cors(corsOptions), async (req, res) => {
  const getData = await getRegions();

  res.status(200).send(getData);
});

app.get('/data', cors(corsOptions), async (req, res) => {
  const {
    query: { region, page, perPage, search },
  } = req;

  const pagesToSlice = (pageNum = page, perPageNum = perPage) => {
    const start = page === '1' ? 0 : Number(pageNum * Math.round(perPageNum / 2)) + 1;
    const end = start + Number(perPageNum);

    return [start, end];
  };

  const [start, end] = pagesToSlice();
  const { res: data, arrLength: length } = await getTableRows(
    search || null,
    region || null,
    start,
    end,
  );

  res.status(200).send([data, length]);
});

app.listen(port);
