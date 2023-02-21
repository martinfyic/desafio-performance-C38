const { loggerInfo, loggerError } = require('../middlewares/log4js.js');
const infoService = require('../service/infoService.js');

const getInfo = (req, res) => {
	try {
		const info = infoService.InfoProces();
		loggerInfo.info('Se accedió a /info');
		res.render('processInfo', { info });
	} catch (error) {
		loggerError.error(`Error en /info ==> ${error}`);
		res.send('Error');
	}
};

const getPerformance = (req, res) => {
	try {
		const info = infoService.InfoProces();
		loggerInfo.info(`Prueba performance`);
		loggerInfo.info('Se accedió a /info/clg');
		res.render('processInfo', { info });
	} catch (error) {
		loggerError.error(`Error en /info/clg ==> ${error}`);
		res.send('Error');
	}
};

module.exports = {
	getInfo,
	getPerformance,
};
