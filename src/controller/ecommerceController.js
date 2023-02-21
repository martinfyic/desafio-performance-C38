const { loggerInfo, loggerError } = require('../middlewares/log4js.js');
const ecommerService = require('../service/ecommerceService.js');

const allProducts = async (req, res) => {
	try {
		const user = req.user;
		const productsFaker = await ecommerService.allProducts();

		loggerInfo.info('Se accedió a productos');
		res.render('products', {
			user,
			productsFaker,
		});
	} catch (error) {
		loggerError.error(`Error en products ==> ${error}`);
		res.send('Error');
	}
};

const login = (req, res) => {
	try {
		if (req.isAuthenticated()) return res.redirect('/ecommerce');
		loggerInfo.info('Se accedió a /login');
		res.render('login');
	} catch (error) {
		loggerError.error(`Error en /login ==> ${error}`);
		res.send('Error');
	}
};

const postLogin = (req, res) => res.redirect('/ecommerce/');

const getSingup = (req, res) => {
	try {
		if (req.isAuthenticated()) return res.redirect('/ecommerce');
		loggerInfo.info('Se accedió a /signup');
		res.render('signup');
	} catch (error) {
		loggerError.error(`Error en /signup ==> ${error}`);
		res.send('Error');
	}
};

const postSingup = (req, res) => res.redirect('/ecommerce/login');

const logout = (req, res) => {
	try {
		loggerInfo.info('Se accedió a /logout');
		req.logout(err => {
			if (err) return err;
			res.redirect('/ecommerce/login');
		});
	} catch (error) {
		loggerError.error(`Error en /logout ==> ${error}`);
		res.send('Error');
	}
};

const errorLogin = (req, res) => {
	try {
		if (req.isAuthenticated()) return res.redirect('/ecommerce');
		loggerInfo.info('Se accedió a /error-login');
		res.render('error-login');
	} catch (error) {
		loggerError.error(`Error en /error-login ==> ${error}`);
		res.send('Error');
	}
};

const errorSingup = (req, res) => {
	try {
		if (req.isAuthenticated()) return res.redirect('/ecommerce');
		loggerInfo.info('Se accedió a /error-signup');
		res.render('error-signup');
	} catch (error) {
		loggerError.error(`Error en /error-signup ==> ${error}`);
		res.send('Error');
	}
};

module.exports = {
	allProducts,
	login,
	postLogin,
	getSingup,
	postSingup,
	logout,
	errorLogin,
	errorSingup,
};
