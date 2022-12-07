import express from 'express';
import cors from 'cors';
import { logger } from './logger.js';

export { mountSetup, connectPort };

function mountSetup(app){
    app.use([
        cors(),
        express.json(),
        express.urlencoded({extended:false}),
        logger
    ]);
};

function connectPort(app){
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}