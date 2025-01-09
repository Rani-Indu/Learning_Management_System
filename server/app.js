import { config } from "dotenv";
config();
import dbConnection from './config/dbConnection.js'
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


dbConnection();
app.use(cors({
	origin: [process.env.FRONTEND_URL],
	credential: true
}));

app.use(cookieParser());

app.use(express.json());

app.use(morgan('dev'));

app.use('/ping', (req, res) => {
	res.send('pong')
})

app.all('*', (req, res) => {
	res.status(404).send('OOPS!!! 404 Page Not Found')
})


export default app;
