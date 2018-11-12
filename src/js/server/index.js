/* @flow */
import express from 'express';
// $FlowFixMe
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';

import applicationMiddleware from './applicationMiddleware';

const app = express();

/* Express configuration */
// compress all responses
app.disable('x-powered-by');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(compression());


app.use('/static', express.static(path.resolve(__dirname, '..', '..', '..', 'dist')));

app.use('/', applicationMiddleware);

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
