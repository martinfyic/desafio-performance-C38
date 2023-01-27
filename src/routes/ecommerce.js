const passport = require('passport');
const { Router } = require('express');
const isAuth = require('../middlewares/isAuth.js');
const faker = require('../utils/faker.js');
const { loggerInfo, loggerError } = require('../middlewares/log4js.js');

const ecommerceRoute = Router();

ecommerceRoute.get('/', isAuth, (req, res) => {
	try {
		const user = req.user;
		const productsFaker = faker();

		loggerInfo.info('Se accedió a productos');
		res.render('products', {
			user,
			productsFaker,
		});
	} catch (error) {
		loggerError.error(`Error en products ==> ${error}`);
		res.send('Error');
	}
});

ecommerceRoute.get('/login', (req, res) => {
	try {
		if (req.isAuthenticated()) return res.redirect('/ecommerce');
		loggerInfo.info('Se accedió a /login');
		res.render('login');
	} catch (error) {
		loggerError.error(`Error en /login ==> ${error}`);
		res.send('Error');
	}
});

ecommerceRoute.post(
	'/login',
	passport.authenticate('login', { failureRedirect: '/ecommerce/error-login' }),
	(req, res) => res.redirect('/ecommerce/')
);

ecommerceRoute.get('/signup', (req, res) => {
	try {
		if (req.isAuthenticated()) return res.redirect('/ecommerce');
		loggerInfo.info('Se accedió a /signup');
		res.render('signup');
	} catch (error) {
		loggerError.error(`Error en /signup ==> ${error}`);
		res.send('Error');
	}
});
ecommerceRoute.post(
	'/signup',
	passport.authenticate('signup', {
		failureRedirect: '/ecommerce/error-signup',
	}),
	(req, res) => res.redirect('/ecommerce/login')
);

ecommerceRoute.get('/logout', isAuth, (req, res) => {
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
});

ecommerceRoute.get('/error-login', (req, res) => {
	try {
		if (req.isAuthenticated()) return res.redirect('/ecommerce');
		loggerInfo.info('Se accedió a /error-login');
		res.render('error-login');
	} catch (error) {
		loggerError.error(`Error en /error-login ==> ${error}`);
		res.send('Error');
	}
});

ecommerceRoute.get('/error-signup', (req, res) => {
	try {
		if (req.isAuthenticated()) return res.redirect('/ecommerce');
		loggerInfo.info('Se accedió a /error-signup');
		res.render('error-signup');
	} catch (error) {
		loggerError.error(`Error en /error-signup ==> ${error}`);
		res.send('Error');
	}
});

module.exports = ecommerceRoute;
