const express = require('express');
const mutantRouter = require('./mutantRouter');

function routerApi(app) {

    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/mutants', mutantRouter);

}
module.exports = routerApi;