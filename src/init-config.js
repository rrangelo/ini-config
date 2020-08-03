'use stricts'
const fs = require('fs');
const ini = require('ini');
const _ = require('lodash');

let appRoot = require('app-root-path');

global.config = {};

const conf = (path, name = 'config') => {

    let dir = appRoot;
    let ext = '.ini';
    
    if (path) {
        dir += '/' + path;
    }

    config = _.assignIn(config, ini.parse(fs.readFileSync(dir + '/' + name + ext, 'utf-8')));

    return config;
    
}

module.exports = conf;