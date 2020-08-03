'use strict'
let ini = require('./src/init-config');
let iniFolded = require('./src/init-config');
let iniFoldedNamed = require('./src/init-config');

ini();

console.log('global:       ' + JSON.stringify(config));
console.log('config:       ' + config.section.key);

iniFolded('config');

console.log('global:       ' + JSON.stringify(config));
console.log('config:       ' + config.section.key);


iniFoldedNamed('config', 'another');

console.log('global:       ' + JSON.stringify(config));
console.log('config:       ' + config.section.key);

