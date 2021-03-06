'use strict';

const fs = require('fs');


fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
  if (err) throw err;
  console.log('content1:', data.toString('hex', 0, 8));

  fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
    if (err) throw err;
    console.log('content2:', data.toString('hex', 0, 8));

    fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
      if (err) throw err;
      console.log('content3:', data.toString('hex', 0, 8));
    });
  });
});
