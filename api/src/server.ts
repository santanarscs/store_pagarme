import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import uploadConfig from './config/upload';
import routes from './routes';
import './database';

const app = express();
app.use(
  cors({
    exposedHeaders: ['x-total-count'],
  })
);
app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.listen(3333, () => {
  console.info('app started');
});
