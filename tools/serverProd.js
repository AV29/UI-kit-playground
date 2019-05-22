/* eslint-disable import/default */
/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import * as chalk from './chalkConfig';
import { PROD_PORT, PROD_FALLBACK_INDEX_POINT, DIST_FOLDER } from './constants';

const app = express();

app.use(express.static(DIST_FOLDER));

// Everything else will return the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, PROD_FALLBACK_INDEX_POINT));
});

app.listen(PROD_PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(chalk.chalkSuccess(`Prod is served on port ${PROD_PORT}`));
  }
});
