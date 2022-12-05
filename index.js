import express from 'express';
import cors from 'cors';
import Router from 'express-promise-router';
import './db/index.js';

const app = express();
const port = process.env.PORT_NUMBER || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/user', (req, res) => {
    res.send("users");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});