// tslint:disable-next-line:no-submodule-imports no-var-requires
require('module-alias/register');

import * as bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { authRoutes } from 'src/controllers/auth';
import { movieRoutes } from 'src/controllers/movie';
import { MONGODB_URI } from 'src/utils/secret';

mongoose.Promise = global.Promise;
if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch(err => {
      console.log(
        'MongoDB connection error. Please make sure MongoDB is running. ' + err
      );
      // process.exit();
    });
}

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  return res.json({
    message: 'ready'
  });
});

app.use('/', authRoutes);
app.use('/movie', movieRoutes);

export { app };
