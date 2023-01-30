const { Router } = require('express');
const processInfo = require('../utils/processInfo.js');
const { loggerInfo, loggerError } = require('../middlewares/log4js.js');

const infoRouter = Router();

infoRouter.get('/', (req, res) => {
	try {
		loggerInfo.info('Se accedió a /info');
		res.render('processInfo', { info: processInfo() });
	} catch (error) {
		loggerError.error(`Error en /info ==> ${error}`);
		res.send('Error');
	}
});

infoRouter.get('/clg', (req, res) => {
	try {
		console.log(`Prueba performance`);
		loggerInfo.info('Se accedió a /info/clg');
		res.render('processInfo', { info: processInfo() });
	} catch (error) {
		loggerError.error(`Error en /info/clg ==> ${error}`);
		res.send('Error');
	}
});

module.exports = infoRouter;
