const faker = require('../utils/faker.js');

const allProducts = async () => {
	const allProducts = await faker();
	return allProducts;
};

module.exports = {
	allProducts,
};
