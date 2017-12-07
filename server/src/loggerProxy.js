
const loggerProxy = (req, res, next) => {
    console.log(`${req.method} request, route: ${req.originalUrl}`);
    next();
};

module.exports = loggerProxy;
