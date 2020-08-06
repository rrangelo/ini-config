'use strict'
let ini = require('../index');

ini();

console.log('main config:         ' + JSON.stringify(iniconf));

ini({name: 'other', ext: 'conf'});

console.log('named config:        ' + JSON.stringify(iniconf));

ini({folder: 'config'});

console.log('folded config:       ' + JSON.stringify(iniconf));

ini({folder: 'config', name: 'another', context: 'inictx'});

console.log('folded named config: ' + JSON.stringify(inictx));

if (process.env.EXT_INI_CONF) {
    process.env.EXT_INI_CONF = undefined;
}