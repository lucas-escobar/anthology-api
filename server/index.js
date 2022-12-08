import express from 'express';
import { mountRoutes } from './routes/index.js';
import { mountSetup, connectPort } from './util/index.js';

const app = express();
app.use(express.static('public'));

mountSetup(app);
mountRoutes(app);
connectPort(app);