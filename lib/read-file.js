'use strict';

const fs = require('fs');

const readFile = module.exports = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if (err) return callback(err);
    return callback(null, data.toString());
  });
};