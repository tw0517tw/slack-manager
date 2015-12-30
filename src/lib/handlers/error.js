'use strict';



const config = require('dusle-api/config');


module.exports = function(err, req, res, next) {
    let shownError = {message: err.toString()};

    shownError.level = APIError.Levels[err.level || 3];
    res.status(err.status || 500);
    delete shownError.status;

    res.json({ error: shownError, now: Date.now() }).end();
};
