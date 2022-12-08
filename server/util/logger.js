export { logger };

function logger(req, res, next) {
    console.log('method: %s url: %s path: %s', req.method, req.url, req.path);
    next();
};