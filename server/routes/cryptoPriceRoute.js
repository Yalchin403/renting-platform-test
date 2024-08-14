const express = require('express');
const { fetchBNBPrice } = require('../controllers/cryptoPriceController');

const router = express.Router();

router.route('/prices/bnb').get(fetchBNBPrice);

module.exports = router;
