import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';

//import all envs
import { APP_PORT } from './Config';
import logger from './logger';

//intialize app
const app = express();

//Connect database

//use middlewares
app.use(cookieParser());//cookies
app.use(bodyParser.json());//json
app.use(bodyParser.urlencoded({ extended: true }));//url encode
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200
}));//enable cors

//global error handler

//console reports
app.listen(APP_PORT, () => {
    logger.info(`🚀 app is running on http://localhost:${APP_PORT} 🚀`);
});