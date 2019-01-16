const express = require('express');
const router = new express.Router();
const onfidoRoute = require('./v1/routes/onfido.js');

router.use('/api/v1/kyc', onfidoRoute);

module.exports = router;
