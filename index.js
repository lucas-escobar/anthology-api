import express from 'express';
import { mountRoutes } from './routes/index.js';
import { mountSetup, connectPort } from './util/index.js';

const app = express();

mountSetup(app);
mountRoutes(app);
connectPort(app);