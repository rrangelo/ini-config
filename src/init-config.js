'use stricts'
const fs = require('fs');
const ini = require('ini');
const assignIn = require('lodash.assignin');
const appRoot = require('app-root-path');

global.config = {};

const conf = ({folder, name = 'config'} = {}) => {

    let dir = appRoot;
    let ext = '.ini';
    
    if (folder) {
        dir += '/' + folder;
    }

    config = assignIn(config, ini.parse(fs.readFileSync(dir + '/' + name + ext, 'utf-8')));

}

module.exports = conf;