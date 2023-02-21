const randomNumbers = require('../utils/randomsNumber.js');

const getRandoms = (cant = 100000000) => {
	const randoms = randomNumbers(cant);
	return randoms;
};

module.exports = {
	getRandoms,
};
