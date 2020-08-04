'use strict'
let ini = require('../src/init-config');

ini();

console.log('config: ' + JSON.stringify(config));

ini('config');

console.log('config: ' + JSON.stringify(config));

ini('config', 'another');

console.log('config: ' + JSON.stringify(config));