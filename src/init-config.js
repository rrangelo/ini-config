'use stricts'
const fs = require('fs');
const ini = require('ini');
const assignIn = require('lodash.assignin');
const appRoot = require('app-root-path');

const conf = ({folder, name = 'config', ext = 'ini', context = 'iniconf'} = {}) => {

    let dir = appRoot;
    
    if (folder) {
        dir += '/' + folder;
    }

    global[context] = assignIn(global[context], ini.parse(fs.readFileSync(dir + '/' + name + '.' + ext, 'utf-8')));

}

module.exports = conf;