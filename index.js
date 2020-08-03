'use strict'
let ini = require('./src/init-config');
let iniFolder = require('./src/init-config');

ini();

console.log('global:       ' + JSON.stringify(config));
console.log('config:       ' + config.section.key);

iniFolder('config');

console.log('global:       ' + JSON.stringify(config));
console.log('config:       ' + config.section.key);

