// tslint:disable-next-line:no-submodule-imports no-var-requires
require('module-alias/register');

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
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

app.get('/', (req: Request, res: Response) => {
  return res.json({
    message: 'ready'
  });
});

app.use('/movie', movieRoutes);

export { app };
