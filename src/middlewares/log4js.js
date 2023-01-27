const log4js = require('log4js');

log4js.configure({
	appenders: {
		appInfoConsole: { type: 'console' },
		appWarnFile: { type: 'file', filename: 'loggs/warn.log' },
		appErrorFile: { type: 'file', filename: 'loggs/error.log' },
		logInfo: {
			type: 'logLevelFilter',
			appender: 'appInfoConsole',
			level: 'info',
		},
		logWarn: { type: 'logLevelFilter', appender: 'appWarnFile', level: 'warn' },
		logError: {
			type: 'logLevelFilter',
			appender: 'appErrorFile',
			level: 'error',
		},
	},
	categories: {
		default: { appenders: ['logInfo'], level: 'all' },
		categWarn: { appenders: ['logWarn'], level: 'all' },
		categError: { appenders: ['logError'], level: 'all' },
	},
});

const loggerInfo = log4js.getLogger('default');
const loggerWarn = log4js.getLogger('categWarn');
const loggerError = log4js.getLogger('categError');

module.exports = {
	loggerInfo,
	loggerWarn,
	loggerError,
};
