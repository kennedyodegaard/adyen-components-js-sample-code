const { post } = require('request');
const getPostParameters = require('../utils/getPostParameters');
const handleCallback = require('../utils/handleCallback');

module.exports = (res, request) => {
    const kennedyOdegaard_adyenrecruitment = getPostParameters('/payments', request);

    post(kennedyOdegaard_adyenrecruitment, (err, response, body) => handleCallback({ err, response, body }, res));
};
