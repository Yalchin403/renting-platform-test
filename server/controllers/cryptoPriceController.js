const asyncErrorHandler = require('../middlewares/helpers/asyncErrorHandler');
const { getBnbPrice } = require('../utils/bnbPriceFetcher');


exports.fetchBNBPrice = asyncErrorHandler(async (req, res, next) => {

    const currentBNBPrice = await getBnbPrice();

    res.status(201).json({
        price: currentBNBPrice,
        currency: 'USD',
    });
});
