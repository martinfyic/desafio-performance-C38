const { loggerInfo, loggerError } = require('../middlewares/log4js.js');
const randomService = require('../service/randomService.js');

const getRandoms = (req, res) => {
	try {
		loggerInfo.info('Se accedió a /randoms');
		const cant = req.query.cant;
		const msg = randomService.getRandoms(cant);
		res.render('randomsNumbers', { msg });
	} catch (error) {
		loggerError.error(`Error en /randoms ==> ${error}`);
		res.send('Error');
	}
};

module.exports = {
	getRandoms,
};
