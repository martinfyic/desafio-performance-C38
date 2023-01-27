const mongoose = require('mongoose');
const { loggerInfo, loggerError } = require('../middlewares/log4js');
require('colors');

const connectionDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_URL, {}, () => {
			loggerInfo.info(` 💽 Conectado a MongoDB Cloud`.yellow);
		});
	} catch (error) {
		loggerError.error(` ⚠️ Error ==> ${error?.message || error}`.red);
		throw new Error('Error al conectarse a la DB');
	}
};

module.exports = connectionDB;
