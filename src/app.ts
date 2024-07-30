import express, { Express } from 'express';
import dotenv from 'dotenv';
import { userRouter } from './controllers/user';
import { homeRouter } from './controllers/home';
import { artistRouter } from './controllers/artist';
import { businessRouter } from './controllers/business';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter);
app.use('/users', userRouter);
app.use('/artists', artistRouter);
app.use('/businesses', businessRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
