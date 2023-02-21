const { loggerWarn } = require('../middlewares/log4js.js');

const pageNotFound = (req, res) => {
	try {
		loggerWarn.warn('404 | Ruta no encontrada');
		res.render('404');
	} catch (error) {
		loggerError.error(`Error en 404 ==> ${error}`);
		res.send('Error');
	}
};

module.exports = {
	pageNotFound,
};
