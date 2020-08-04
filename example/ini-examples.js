'use strict'
let ini = require('../src/init-config');

ini();

console.log('main config:         ' + JSON.stringify(config));

ini({name: 'other'});

console.log('named config:        ' + JSON.stringify(config));

ini({folder: 'config'});

console.log('folded config:       ' + JSON.stringify(config));

ini({folder: 'config', name: 'another'});

console.log('folded named config: ' + JSON.stringify(config));