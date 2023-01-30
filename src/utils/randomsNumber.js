const randomNumbers = cant => {
	const number = [];
	const min = 1;
	const max = 1000;

	for (let i = 0; i < cant; i++) {
		const numbers = Math.floor(Math.random() * max + min);
		number.push(numbers);
	}

	const countNumber = number.reduce((acc, curr) => {
		acc[curr] = (acc[curr] || 0) + 1;
		return acc;
	}, {});

	return countNumber;
};

module.exports = randomNumbers;
