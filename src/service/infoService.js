const processInfo = require('../utils/processInfo.js');

const InfoProces = () => {
	const info = processInfo();
	return info;
};

module.exports = {
	InfoProces,
};
