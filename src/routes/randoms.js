const { Router } = require('express');
const { loggerInfo, loggerError } = require('../middlewares/log4js.js');
const randomNumbers = require('../utils/randomsNumber');

const randomRoute = Router();

randomRoute.get('/', (req, res) => {
	try {
		loggerInfo.info('Se accedió a /randoms');
		const cant = req.query.cant || 100000000;

		res.render('randomsNumbers', { msg: randomNumbers(cant) });
	} catch (error) {
		loggerError.error(`Error en /randoms ==> ${error}`);
		res.send('Error');
	}
});

module.exports = randomRoute;
