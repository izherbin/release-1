/* eslint-disable import/extensions, import/no-extraneous-dependencies */
import express from 'express';

const __dirname = path.resolve();

const app = express();

const port = process.env.PORT || 8280;

app.get('/regions', (req, res) => {
  const response = res.send(getRegions);

  return response;
});

app.listen(port);
