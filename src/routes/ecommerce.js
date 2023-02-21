const { Router } = require('express');
const passport = require('passport');
const isAuth = require('../middlewares/isAuth.js');
const ecommerController = require('../controller/ecommerceController.js');

const ecommerceRoute = Router();

ecommerceRoute.get('/', isAuth, ecommerController.allProducts);

ecommerceRoute.get('/login', ecommerController.login);

ecommerceRoute.post(
	'/login',
	passport.authenticate('login', { failureRedirect: '/ecommerce/error-login' }),
	ecommerController.postLogin
);

ecommerceRoute.get('/signup', ecommerController.getSingup);

ecommerceRoute.post(
	'/signup',
	passport.authenticate('signup', {
		failureRedirect: '/ecommerce/error-signup',
	}),
	ecommerController.postSingup
);

ecommerceRoute.get('/logout', isAuth, ecommerController.logout);

ecommerceRoute.get('/error-login', ecommerController.errorLogin);

ecommerceRoute.get('/error-signup', ecommerController.errorSingup);

module.exports = ecommerceRoute;
