'use stricts'
const fs = require('fs');
const ini = require('ini');
const assignIn = require('lodash.assignin');
const appRoot = require('app-root-path');

const conf = ({folder, name = 'config', ext = 'ini', context = 'iniconf'} = {}) => {

    let path = appRoot.path;
    let extPath = process.env.EXT_INI_CONF || undefined;

    if (folder) {
        path += '/' + folder;
    }

    path += '/' + name + '.' + ext;

    try {
        load(path, context);
    } catch (error) {
        if (!extPath) {
            throw error;
        }
    } finally {
        if (extPath) {
            path = extPath.trim();
            load(path, context);
        }
    }
    
}

function load(path, context) {
    if (fs.existsSync(path)) {
        global[context] = assignIn(global[context], ini.parse(fs.readFileSync(path, 'utf-8')));
    } else {
        throw 'File not found';
    }
}

module.exports = conf;