const { Router } = require('express');
const { loggerWarn } = require('../middlewares/log4js.js');

const error404 = Router();

error404.get('/', (req, res) => {
	loggerWarn.warn('404 | Ruta no encontrada');
	res.render('404');
});

module.exports = error404;
