const { Router } = require('express');
const { pageNotFound } = require('../controller/404Controller.js');

const error404 = Router();

error404.get('/', pageNotFound);

module.exports = error404;
