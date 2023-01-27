const { Router } = require('express');
const processInfo = require('../utils/processInfo.js');
const compression = require('compression');

const infoRouter = Router();

infoRouter.get('/', compression(), (req, res) => {
	res.render('processInfo', { info: processInfo() });
});

module.exports = infoRouter;
