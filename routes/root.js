import Router from 'express-promise-router';
export { rootRouter };

const rootRouter = new Router();
rootRouter.get('/', async (req, res) => {
    res.send('root router');
});
