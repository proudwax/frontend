'use strict';

const Request = require( './_request' );

const url = '/cart';

const getCart = async () => {
  const tour = new Request( url, {} );
  return await tour.request();
};

module.exports = getCart;
