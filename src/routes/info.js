const { Router } = require('express');
const infoController = require('../controller/infoController.js');

const infoRouter = Router();

infoRouter.get('/', infoController.getInfo);

infoRouter.get('/clg', infoController.getPerformance);

module.exports = infoRouter;
