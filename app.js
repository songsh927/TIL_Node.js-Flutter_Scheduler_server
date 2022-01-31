import express from 'express';
import 'express-async-errors';
import scheduleRouter from './router/schedule.js';
import memoRouter from './router/memo.js';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(cors('*'));
app.use(morgan('tiny'));

app.set('etag', false);

app.use('/scheduler' , scheduleRouter);

//app.use('/memo' , memoRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
})


app.listen(3000);