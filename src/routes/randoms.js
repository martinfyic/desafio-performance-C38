const { Router } = require('express');
const randomController = require('../controller/randomController.js');

const randomRoute = Router();

randomRoute.get('/', randomController.getRandoms);

module.exports = randomRoute;
