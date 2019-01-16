const express = require('express');
const validate = require('express-validation');
const onfidoController = require('../controllers/onfido.js');
const router = new express.Router();

const postOnfido = require('./validators/onfido.js');

router.route('/webhook/').post(
    validate(postOnfido.validate), onfidoController.postOnfido);

module.exports = router;
