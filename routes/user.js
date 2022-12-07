import Router from 'express-promise-router';
import { query } from '../db/index.js';

export { userRouter };

const userRouter = new Router();

userRouter.get('/user/:input', (req, res) => {
    const { input } = req.params;
    const text = 'INSERT INTO community (community_name) VALUES ($1)';
    query(text, [input]);
    res.send("Input added to db")
});


