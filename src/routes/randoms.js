const { Router } = require('express');
const { fork } = require('node:child_process');
const { loggerInfo, loggerError } = require('../middlewares/log4js.js');

const randomRoute = Router();

randomRoute.get('/', (req, res) => {
	try {
		loggerInfo.info('Se accedió a /randoms');
		const cant = req.query.cant || 100000000;
		const child_process = fork('./src/utils/randomsNumber.js');

		child_process.send(cant);
		child_process.on('message', msg => {
			res.render('randomsNumbers', { msg });
		});

		child_process.on('exit', code => {
			console.log('Se ha cerrado el proceso', code);
		});
	} catch (error) {
		loggerError.error(`Error en /randoms ==> ${error}`);
		res.send('Error');
	}
});

module.exports = randomRoute;
