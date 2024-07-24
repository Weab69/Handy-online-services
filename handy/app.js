import { config } from "dotenv";
import express from "express";
import ExpressLayout from 'express-ejs-layouts';
import MainRouter from './server/routes/main.js';

config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use(ExpressLayout);
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

app.use('/', MainRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})
