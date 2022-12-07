import { userRouter } from './user.js';
import { rootRouter } from './root.js';

export function mountRoutes(app){
    app.use([
        userRouter,
        rootRouter
    ]);
};